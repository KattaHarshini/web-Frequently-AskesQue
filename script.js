document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
   

        {
  "question": " Two Sum",
  "description": "Find two numbers in an array that add up to a target.",
  "hint": "Use a hash map to track visited numbers.",
  "answer": `
<pre><code class="language-javascript">
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
</code></pre>
`
},
{
  "question": " Valid Parentheses",
  "description": "Check if a string with brackets is valid.",
  "hint": "Use a stack to track open brackets.",
  "answer": `
<pre><code class="language-javascript">
function isValid(s) {
  const stack = [];
  const map = { ')':'(', ']':'[', '}':'{' };
  for (let ch of s) {
    if (['(','[','{'].includes(ch)) stack.push(ch);
    else if (stack.pop() !== map[ch]) return false;
  }
  return stack.length === 0;
}
</code></pre>
`
},
{
  "question": " Merge Two Sorted Lists",
  "description": "Merge two sorted linked lists into one.",
  "hint": "Use recursion or iterative pointer merging.",
  "answer": `
<pre><code class="language-javascript">
function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
</code></pre>
`
},
{
  "question": " Maximum Subarray",
  "description": "Find the subarray with the maximum sum.",
  "hint": "Use Kadane’s Algorithm.",
  "answer": `
<pre><code class="language-javascript">
function maxSubArray(nums) {
  let maxSum = nums[0], currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
</code></pre>
`
},
{
  "question": " Move Zeroes",
  "description": "Move all zeroes to the end without changing order of non-zero elements.",
  "hint": "Use two pointers.",
  "answer": `
<pre><code class="language-javascript">
function moveZeroes(nums) {
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[lastNonZero]] = [nums[lastNonZero], nums[i]];
      lastNonZero++;
    }
  }
}
</code></pre>
`
},
{
  "question": " Reverse a Linked List",
  "description": "Reverse the given singly linked list.",
  "hint": "Use three pointers: prev, curr, next.",
  "answer": `
<pre><code class="language-javascript">
function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
</code></pre>
`
},
{
  "question": " Climbing Stairs",
  "description": "Find how many ways to climb stairs with 1 or 2 steps at a time.",
  "hint": "Use dynamic programming or Fibonacci sequence.",
  "answer": `
<pre><code class="language-javascript">
function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
}
</code></pre>
`
},
{
  "question": " Remove Duplicates from Sorted Array",
  "description": "Remove duplicates in-place and return new length.",
  "hint": "Use two pointers to shift unique elements.",
  "answer": `
<pre><code class="language-javascript">
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
</code></pre>
`
},
{
  "question": " Best Time to Buy and Sell Stock",
  "description": "Maximize profit by choosing best days to buy/sell.",
  "hint": "Track minimum price and max profit.",
  "answer": `
<pre><code class="language-javascript">
function maxProfit(prices) {
  let minPrice = Infinity, maxProfit = 0;
  for (let price of prices) {
    if (price < minPrice) minPrice = price;
    else maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}
</code></pre>
`
},
{
  "question": " Check for Anagrams",
  "description": "Check if two strings are anagrams.",
  "hint": "Sort both strings or use character count hash maps.",
  "answer": `
<pre><code class="language-javascript">
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (let char of s) count[char] = (count[char] || 0) + 1;
  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}
</code></pre>
`
},
{
  "question": " Group Anagrams",
  "description": "Group words that are anagrams of each other.",
  "hint": "Use sorted string as key in a hash map.",
  "answer": `
<pre><code class="language-javascript">
function groupAnagrams(strs) {
  const map = new Map();
  for (let word of strs) {
    const sorted = word.split('').sort().join('');
    if (!map.has(sorted)) map.set(sorted, []);
    map.get(sorted).push(word);
  }
  return [...map.values()];
}
</code></pre>
`
},
{
  "question": " Binary Tree Inorder Traversal",
  "description": "Return inorder traversal of binary tree.",
  "hint": "Use recursion or stack for iterative method.",
  "answer": `
<pre><code class="language-javascript">
function inorderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
}
</code></pre>
`
},
{
  "question": " Search in Rotated Sorted Array",
  "description": "Search for a target in a rotated sorted array.",
  "hint": "Use binary search with conditions for rotation.",
  "answer": `
<pre><code class="language-javascript">
function search(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}
</code></pre>
`
},
{
  "question": " Rotate Image",
  "description": "Rotate an NxN matrix 90 degrees clockwise in-place.",
  "hint": "Transpose the matrix then reverse each row.",
  "answer": `
<pre><code class="language-javascript">
function rotate(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let row of matrix) {
    row.reverse();
  }
}
</code></pre>
`
},
{
  "question": " Longest Palindromic Substring",
  "description": "Find the longest palindromic substring.",
  "hint": "Use expand-around-center approach.",
  "answer": `
<pre><code class="language-javascript">
function longestPalindrome(s) {
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expand(s, i, i);
    let len2 = expand(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);

  function expand(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--; right++;
    }
    return right - left - 1;
  }
}
</code></pre>
`
},
{
  "question": " Count Primes",
  "description": "Count the number of primes less than n.",
  "hint": "Use the Sieve of Eratosthenes.",
  "answer": `
<pre><code class="language-javascript">
function countPrimes(n) {
  const isPrime = Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime.filter(Boolean).length;
}
</code></pre>
`
},
{
  "question": " Implement Queue using Stacks",
  "description": "Create a queue using two stacks.",
  "hint": "Use two stacks to simulate enqueue and dequeue.",
  "answer": `
<pre><code class="language-javascript">
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x) {
    this.stack1.push(x);
  }

  pop() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    return !this.stack1.length && !this.stack2.length;
  }
}
</code></pre>
`
},
{
  "question": " Find the Duplicate Number",
  "description": "Given n + 1 integers where each integer is between 1 and n, return the duplicate.",
  "hint": "Use Floyd’s Tortoise and Hare (cycle detection).",
  "answer": `
<pre><code class="language-javascript">
function findDuplicate(nums) {
  let slow = nums[0], fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  
  fast = nums[0];
  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return fast;
}
</code></pre>
`
},
{
  "question": " Product of Array Except Self",
  "description": "Return an array such that each element is product of all elements except itself.",
  "hint": "Use prefix and suffix products.",
  "answer": `
<pre><code class="language-javascript">
function productExceptSelf(nums) {
  const result = Array(nums.length).fill(1);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
}
</code></pre>
`
},
{
  "question": " Binary Search",
  "description": "Search a target in a sorted array.",
  "hint": "Divide the array in half at each step.",
  "answer": `
<pre><code class="language-javascript">
function binarySearch(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
</code></pre>
`
},
{
  "question": " Tell me about a time you failed. How did you handle it?",
  "description": "Interviewers want to assess your self-awareness and ability to learn from mistakes.",
  "hint": "Pick a real example where you took responsibility and showed improvement.",
  "answer": "In my second year of college, I led a team project that missed the deadline due to poor time estimation. I took full responsibility, analyzed where we went wrong, and implemented a structured timeline for future projects. This taught me the importance of setting realistic goals and effective team communication."
},
{
  "question": " How do you handle conflicts in a team?",
  "description": "They want to see your collaboration and conflict-resolution skills.",
  "hint": "Demonstrate maturity, communication, and compromise.",
  "answer": "When conflicts arise, I listen to all perspectives first without judgment. In one college hackathon, two teammates had differing views on tech stacks. I facilitated a meeting to weigh pros and cons, and we agreed on a hybrid solution. We ended up winning the second prize!"
},
{
  "question": " Where do you see yourself in 5 years?",
  "description": "This assesses your career goals and long-term interest in the company.",
  "hint": "Show ambition but also flexibility and alignment with the company’s goals.",
  "answer": "In 5 years, I see myself growing technically and leading a small team of developers, contributing to innovative projects, and mentoring freshers. I’m also keen to expand my full-stack skills and get involved in architecture-level decisions."
},
{
  "question": " Why should we hire you?",
  "description": "Highlight your unique combination of skills, mindset, and motivation.",
  "hint": "Relate your strengths directly to the job role.",
  "answer": "I bring a strong foundation in Java and full-stack development, a proactive mindset, and the ability to learn quickly. My internship experience and problem-solving skills make me well-suited to contribute from day one while continuously improving."
},
{
  "question": " Describe a situation where you worked under pressure.",
  "description": "This tests your resilience and decision-making abilities.",
  "hint": "Use STAR method (Situation, Task, Action, Result).",
  "answer": "During our final year project submission, my laptop crashed a day before the demo. I quickly coordinated with my team, retrieved code from GitHub, reconfigured everything, and completed documentation overnight. The project demo was a success, and the panel appreciated our efforts."
},
{
  "question": " What are your strengths and weaknesses?",
  "description": "Be honest but strategic.",
  "hint": "Pick a real weakness and show how you're improving it.",
  "answer": "One of my strengths is adaptability – I can quickly learn and apply new tools or concepts. A weakness I’ve worked on is overcommitting. I now plan my work better using task lists and buffer time, which has improved my delivery consistency."
}





























































    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});