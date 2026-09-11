/**
 * There are three types of edits that can performed on string: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to
 * check if they are one edit (or zero edits) away.
 */

function oneWay(s1: string, s2: string): boolean {
  if (Math.abs(s1.length - s2.length) > 1) return false;

  let p1 = 0;
  let p2 = 0;
  let edited = false;

  while(p1 < s1.length && p2 < s2.length) {
    if (s1[p1] !== s2[p2]) {
      if (edited) return false;
      edited = true;

      if (s1.length === s2.length) {
        p1++;
        p2++;
      } else if (s1.length > s2.length) {
        p1++;
      } else {
        p2++;
      }
    } else {
      p1++;
      p2++;
    }
  }
    
  return true;
}


// Test
const t1_s1 = 'pale';
const t1_s2 = 'ple';
const t2_s1 = 'pales';
const t2_s2 = 'pale';
const t3_s1 = 'pale';
const t3_s2 = 'bale';
const t4_s1 = 'pale';
const t4_s2 = 'bake';

console.log(`${t1_s1}, ${t1_s2} -> result: ${oneWay(t1_s1, t1_s2)}`);
console.log(`${t2_s1}, ${t2_s2} -> result: ${oneWay(t2_s1, t2_s2)}`);
console.log(`${t3_s1}, ${t3_s2} -> result: ${oneWay(t3_s1, t3_s2)}`);
console.log(`${t4_s1}, ${t4_s2} -> result: ${oneWay(t4_s1, t4_s2)}`);