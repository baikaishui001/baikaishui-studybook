/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings1 = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  } else if (s === goal) {
    return has_repeat(s);
  }
  let keys = [];
  for (let i = 0; s[i]; i++) {
    let si = s[i],
      gi = goal[i];
    if (si !== gi && keys.length == 2) {
      return false;
    } else if (si !== gi) {
      keys.push(i);
    }
  }
  return s[keys[0]] === goal[keys[1]] && s[keys[1]] === goal[keys[0]];
};
function has_repeat(s) {
  let itemMap = {};
  for (let i = 0; s[i]; i++) {
    let cur = s[i];
    itemMap[cur] = (itemMap[cur] || 0) + 1;
    if (itemMap[cur] > 1) {
      return true;
    }
  }
  return false;
}

var buddyStrings2 = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  let isEqua = s === goal,
    repeatL = {},
    keys = [];
  for (let i = 0; s[i]; i++) {
    repeatL[s[i]] = (repeatL[s[i]] || 0) + 1;
    if (isEqua && repeatL[s[i]]>1) {
      return true;
    } else if(i==s.length-1&&isEqua&&repeatL[s[i]]==1)
    {
        return false
    }
    let si = s[i],
      gi = goal[i];
    if (si !== gi && keys.length == 2) {
      return false;
    } else if (si !== gi) {
      keys.push(i);
    }
  }
  return s[keys[0]] === goal[keys[1]] && s[keys[1]] === goal[keys[0]];
};

var buddyStrings3 = function(s, goal) {
    if(s.length !== goal.length )return false ;
    let l =s.length, sL = [], gl = [] , map ={}, flag =false;
    for(let i = 0; i< l; i++){
            map[s[i]] = map[s[i]] !== undefined ?map[s[i]] +1:1;
            if(map[s[i]]>1){ flag = true}
        if(s[i] !== goal[i]){
            sL.push(s[i]); gl.push(goal[i])
            if(sL.length > 2){ return false}
        }
    }
    if(sL.length === 1){ return false}
    if(sL.length ===0){ return flag }
    return sL[0] === gl[1] && sL[1] === gl[0]
};
