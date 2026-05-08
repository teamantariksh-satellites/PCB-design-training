// ============================================================
// PCB Design Training — GitHub Collaborator Auto-Invite
// Paste this entire file into Google Apps Script (Extensions →
// Apps Script) in the linked Google Sheet.
//
// Then set the trigger:
//   Triggers (clock icon) → Add Trigger
//   Function: onFormSubmit
//   Event source: From spreadsheet
//   Event type: On form submit
// ============================================================

// --- CONFIGURATION ---
// Paste your GitHub fine-grained PAT here.
// Needs: Repository permissions → Collaborators → Read and Write
// for the teamantariksh-satellites org.
var GITHUB_PAT = 'YOUR_PAT_HERE';

// Add all repos you want students to be invited to.
// They will be invited to ALL of these on form submit.
var GITHUB_OWNER = 'teamantariksh-satellites';
var REPOS = [
  'PCB-design-training',
  // 'another-repo-name',   // uncomment and add more repos here
];

var PERMISSION = 'push'; // 'pull' = read only, 'push' = read + write

// Column indices in the Google Sheet (0-based).
// Order matches the form field order you created.
// Timestamp is always column 0 (added automatically by Forms).
var COL_TIMESTAMP     = 0;
var COL_FULL_NAME     = 1;
var COL_GITHUB_USER   = 2;
var COL_RVCE_EMAIL    = 3;
var COL_BATCH         = 4;
var COL_STATUS_START  = 5; // result columns written here onwards

// --- MAIN FUNCTION ---
function onFormSubmit(e) {
  var values = e.values;

  var fullName       = values[COL_FULL_NAME].trim();
  var githubUsername = values[COL_GITHUB_USER].trim().replace(/^@/, '');
  var rvceEmail      = values[COL_RVCE_EMAIL].trim();
  var batch          = values[COL_BATCH].trim();

  if (!githubUsername) {
    logStatus('ERROR: Empty GitHub username for ' + fullName);
    return;
  }

  var results = [];

  for (var i = 0; i < REPOS.length; i++) {
    var repo = REPOS[i];
    var result = inviteCollaborator(githubUsername, repo);
    results.push(repo + ': ' + result);
  }

  // Write status back to the sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  sheet.getRange(lastRow, COL_STATUS_START + 1).setValue(results.join(' | '));

  // Send confirmation email to the student
  sendConfirmationEmail(fullName, githubUsername, rvceEmail, batch, results);
}

// --- INVITE FUNCTION ---
function inviteCollaborator(username, repo) {
  var url = 'https://api.github.com/repos/' + GITHUB_OWNER + '/' + repo + '/collaborators/' + username;

  var options = {
    method: 'put',
    headers: {
      'Authorization': 'Bearer ' + GITHUB_PAT,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    payload: JSON.stringify({ permission: PERMISSION }),
    contentType: 'application/json',
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(url, options);
  var code = response.getResponseCode();

  if (code === 201) {
    return 'Invited successfully';
  } else if (code === 204) {
    return 'Already a collaborator';
  } else {
    return 'Error ' + code + ': ' + response.getContentText();
  }
}

// --- EMAIL FUNCTION ---
function sendConfirmationEmail(fullName, githubUsername, rvceEmail, batch, results) {
  var allOk = results.every(function(r) {
    return r.indexOf('Error') === -1;
  });

  var subject = allOk
    ? 'PCB Design Training — You have been invited to the repository'
    : 'PCB Design Training — There was an issue with your access request';

  var body = 'Hi ' + fullName + ',\n\n';

  if (allOk) {
    body += 'A GitHub collaborator invitation has been sent to your account @' + githubUsername + '.\n\n';
    body += 'To accept it:\n';
    body += '1. Go to https://github.com/notifications\n';
    body += '2. Accept the invitation from teamantariksh-satellites\n\n';
    body += 'Once accepted, follow the README to clone the repo and get started:\n';
    body += 'https://github.com/teamantariksh-satellites/PCB-design-training\n\n';
    body += 'Batch: ' + batch + '\n\n';
    body += 'If you have questions, open a GitHub Issue in the repo — do not ask on WhatsApp.\n\n';
    body += 'Team Antariksh\n';
  } else {
    body += 'We could not process your access request. Details:\n\n';
    body += results.join('\n') + '\n\n';
    body += 'Please check that your GitHub username is correct and try again, or contact your mentor.\n\n';
    body += 'Team Antariksh\n';
  }

  MailApp.sendEmail({
    to: rvceEmail,
    subject: subject,
    body: body
  });
}

// --- UTILITY ---
function logStatus(message) {
  Logger.log(message);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  sheet.getRange(lastRow, COL_STATUS_START + 1).setValue(message);
}

// --- TEST FUNCTION ---
// Run this manually from Apps Script to test without a real form submission.
// Change the values to a real GitHub username you want to test with.
function testInvite() {
  var fakeEvent = {
    values: [
      new Date().toString(),   // timestamp
      'Test Student',          // full name
      'your-test-github-user', // github username  <-- change this
      'test@rvce.edu.in',      // rvce email
      '2024'                   // batch
    ]
  };
  onFormSubmit(fakeEvent);
}
