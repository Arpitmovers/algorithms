function naivePatternMatch(pattern, input) {
    // return indices where match is found

    var patLen = pattern.length;
    for (var i = 0; i < input.length - patLen; i++) {


        for (var j = 0; j < patLen; j++) {
             if (input[i+j] != pattern[j]) {
                break;
            }
            if (input[i+j] == pattern[j]) {
                if (j == patLen - 1) {
                    console.log(' pattern found at index ', i);
                    break;
                }
            }

        }
    }

}

naivePatternMatch('AABA','AABAACAADAABAAABAA')
