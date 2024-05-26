var reverseVowels = function(s) {

let arr=['a','e','i','o','u','A','E','I','O','U',]
s=s.split("")

    let i=0,j=s.length-1;

        while(i<j){
            while(i<j && !arr.includes(s[i])){
                i++
            }
            while(i<j && !arr.includes(s[j])){
                j--
            }
            if(arr.includes(s[i]) && arr.includes(s[j])){
              
                let temp=s[i];
                    s[i]=s[j];
                    s[j]=temp
            }
            i++;
            j--;
        }

        return s.join("")
};


console.log(reverseVowels("aA"))


// #################################################
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    

    let arr=['a','e','i','o','u']
    
    s=s.split("")
    
        let i=0,j=s.length-1;
    
            while(i<j){
                while(i<j && !arr.includes(s[i].toLowerCase())){
                    i++
                }
                while(i<j && !arr.includes(s[j].toLowerCase())){
                    j--
                }
                if(arr.includes(s[i].toLowerCase()) && arr.includes(s[j].toLowerCase())){
                    let temp=s[i];
                        s[i]=s[j];
                        s[j]=temp
                }
                i++;
                j--;
            }
    
            return s.join("")
    };


    https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75