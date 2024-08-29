var minWindow = function (s, t) {
    let left = 0;
    let right = 0;
    let res = '';
    let minLen = Infinity;
    let map = new Map();
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], map.has(t[i]) ? map.get(t[i]) + 1 : 1);
    }
    let match = 0;
    while (right < s.length) {
        let c1 = s[right];
        if (map.has(c1)) {
            map.set(c1, map.get(c1) - 1);
            if (map.get(c1) >= 0) {
                match++;
            }
        }
        right++;
        while (match === t.length) {
            if (right - left < minLen) {
                minLen = right - left;
                res = s.slice(left, right);
            }
            let c2 = s[left];
            if (map.has(c2)) {

                map.set(c2, map.get(c2) + 1);
                if (map.get(c2) > 0) {
                    match--;
                }
            }
            left++;

        }

    }
    return res;
};