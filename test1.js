function longestCommonSubstring(str1, str2) {
  let longest = "";
  let current = "";
  let dp = new Array(str1.length + 1);
  for (let i = 0; i <= str1.length; i++) {
    dp[i] = new Array(str2.length + 1);
    for (let j = 0; j <= str2.length; j++) {
      dp[i][j] = 0;
    }
  }
  let maxLength = 0;
  let end = 0;
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          end = i - 1;
        }
      }
    }
  }
  if (maxLength === 0) {
    return "";
  }
  return str1.substring(end - maxLength + 1, end + 1);
}

console.log(longestCommonSubstring("abcdef", "abc"));

