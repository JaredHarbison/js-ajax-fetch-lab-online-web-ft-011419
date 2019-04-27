const gitRepoBase = 'https://api.github.com/repos'
const userURL = `${gitRepoBase}/JaredHarbison/js-ajax-fetch-lab`;
const resultsEl = document.getElementById('results');
const issuesEl = document.getElementById('issues');

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '67c2c74898634910e7f0e7a84b8dd3f942c135c7';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`${gitRepoBase}/${repo}/forks`, {
    method: 'POST', 
    headers: { 
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(data => showResults(data));
};

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
