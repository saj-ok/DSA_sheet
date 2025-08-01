export interface DSAProblem {
  id: number;
  question: string;
  link: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Medium / Hard';
  solutionLink?: string;
  companies: string;
  prerequisites?: string;
  completed: boolean;
}

export interface DSACategory {
  name: string;
  problems: DSAProblem[];
}

export const dsaData: DSACategory[] = [
  {
    name: "ARRAYS",
    problems: [
      {
        id: 1,
        question: "Majority Element",
        link: "https://leetcode.com/problems/majority-element/description/",
        difficulty: "Easy",
        solutionLink: "https://youtu.be/_xqIp2rj8bo?t=882",
        companies: "Amazon Google",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "Repeat & missing number",
        link: "https://leetcode.com/problems/find-missing-and-repeated-values/description/",
        difficulty: "Easy",
        solutionLink: "https://youtu.be/0Fxc_jKj2vo?t=1321",
        companies: "Amazon",
        prerequisites: "Hashing",
        completed: false
      },
      {
        id: 3,
        question: "Merge 2 sorted array without xtra space",
        link: "https://leetcode.com/problems/merge-sorted-array/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=-1cLK6PaLsQ&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=27",
        companies: "Amdocs Brocade Goldman Sachs Juniper Networks Linkedin Microsoft Quikr Snapdeal Synopsys Zoho Adobe",
        prerequisites: "Sorting",
        completed: false
      },
      {
        id: 4,
        question: "Single Number",
        link: "https://leetcode.com/problems/single-number/description/",
        difficulty: "Easy",
        solutionLink: "https://youtu.be/NWg38xWYzEg?t=1393",
        companies: "",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "Stock Buy & Sell",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/",
        difficulty: "Easy",
        solutionLink: "https://youtu.be/WBzZCm46mFo?t=835",
        companies: "Amazon DEShaw Directi Flipkart Goldman Sachs Intuit MakeMyTrip Microsoft Ola Cabs Oracle Paytm Pubmatic Quikr Salesforce Sapient Swiggy Walmart Media.net Google",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Kadane's Algorithm",
        link: "https://leetcode.com/problems/maximum-subarray/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/9IZYqostl2M?t=760",
        companies: "Microsoft Facebook",
        prerequisites: "",
        completed: false
      },
      {
        id: 7,
        question: "Pow x^n",
        link: "https://leetcode.com/problems/powx-n/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/WBzZCm46mFo?t=21",
        companies: "",
        prerequisites: "",
        completed: false
      },
      {
        id: 8,
        question: "Container with most water",
        link: "https://leetcode.com/problems/container-with-most-water/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=EbkMABpP52U",
        companies: "Flipkart Dunzo",
        prerequisites: "",
        completed: false
      },
      {
        id: 9,
        question: "Sort array of 0s, 1s & 2s",
        link: "https://leetcode.com/problems/sort-colors/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=J48aGjfjYTI&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=26",
        companies: "Microsoft Amazon MakeMyTrip",
        prerequisites: "Sorting",
        completed: false
      },
      {
        id: 10,
        question: "3Sum",
        link: "https://leetcode.com/problems/3sum/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=K-RsltkN63w",
        companies: "Adobe Amazon Microsoft Morgan Stanley Samsung Snapdeal Times Internet",
        prerequisites: "Hashing",
        completed: false
      },
      {
        id: 11,
        question: "4Sum",
        link: "https://leetcode.com/problems/4sum/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=X6sL8JTROLY",
        companies: "",
        prerequisites: "Hashing",
        completed: false
      },
      {
        id: 12,
        question: "Search a 2D matrix",
        link: "https://leetcode.com/problems/search-a-2d-matrix/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=LEFFjgt5i6w&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=37",
        companies: "",
        prerequisites: "2D Array",
        completed: false
      },
      {
        id: 13,
        question: "Next permutation",
        link: "https://leetcode.com/problems/next-permutation/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/-1cLK6PaLsQ?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=967",
        companies: "Adobe GoldmanSachs Uber",
        prerequisites: "Sorting",
        completed: false
      },
      {
        id: 14,
        question: "Merge overlapping intervals",
        link: "https://leetcode.com/problems/merge-intervals/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google",
        prerequisites: "Sorting",
        completed: false
      },
      {
        id: 15,
        question: "Longest substring without repeating",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "MorganStanley Amazon",
        prerequisites: "String",
        completed: false
      },
      {
        id: 16,
        question: "Set matrix zeroes",
        link: "https://leetcode.com/problems/set-matrix-zeroes/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Microsoft Amazon",
        prerequisites: "Sets",
        completed: false
      },
      {
        id: 17,
        question: "Word search",
        link: "https://leetcode.com/problems/word-search/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Ola GoldmanSachs Google",
        prerequisites: "Recursion",
        completed: false
      },
      {
        id: 18,
        question: "Product of array except itself",
        link: "https://leetcode.com/problems/product-of-array-except-self/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=TW2m8m_FNJE",
        companies: "Amazon DEShaw Intuit MorganStanley Flipkart",
        prerequisites: "",
        completed: false
      },
      {
        id: 19,
        question: "Subarray sum equals k",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "",
        prerequisites: "Hashing",
        completed: false
      },
      {
        id: 20,
        question: "Find Duplicate",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/0Fxc_jKj2vo?t=2000",
        companies: "Amazon D-E-Shaw Flipkart Paytm Qualcomm Zoho",
        prerequisites: "LL Cycles",
        completed: false
      },
      {
        id: 21,
        question: "Count Inversions",
        link: "https://www.hackerrank.com/challenges/ctci-merge-sort/problem",
        difficulty: "Medium / Hard",
        solutionLink: "",
        companies: "Adobe Amazon BankBazaar Flipkart Microsoft Myntra MakeMyTrip",
        prerequisites: "Merge Sort",
        completed: false
      },
      {
        id: 22,
        question: "Trapping Rainwater",
        link: "https://leetcode.com/problems/trapping-rain-water/description/",
        difficulty: "Hard",
        solutionLink: "https://youtu.be/UHHp8USwx4M?t=513",
        companies: "Samsung",
        prerequisites: "",
        completed: false
      },
      {
        id: 23,
        question: "Sliding window maximum",
        link: "https://leetcode.com/problems/sliding-window-maximum/description/",
        difficulty: "Hard",
        solutionLink: "https://www.youtube.com/watch?v=XwG5cozqfaM",
        companies: "Amazon Directi Flipkart Microsoft Google",
        prerequisites: "Hashing",
        completed: false
      },
      {
        id: 24,
        question: "Reverse pairs",
        link: "https://leetcode.com/problems/reverse-pairs/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "",
        prerequisites: "Merge Sort",
        completed: false
      },
      {
        id: 25,
        question: "Largest rectangle in a histogram",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/description/",
        difficulty: "Hard",
        solutionLink: "https://www.youtube.com/watch?v=ysy1o-QEj3k",
        companies: "",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "BINARY SEARCH",
    problems: [
      {
        id: 1,
        question: "Search in rotated sorted",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=6WNZQBHWQJs",
        companies: "Microsoft Google Adobe Amazon D-E-Shaw Flipkart Hike Intuit MakeMyTrip Paytm",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "Peak index in mountain array",
        link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=RjxD6UXGlhc",
        companies: "",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Single element in sorted array",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=qsbCBduIs40",
        companies: "",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Allocate Minimum Pages (Book Allocation)",
        link: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=JRAByolWqhw",
        companies: "Google Infosys Codenation Amazon Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "Painter's Partition",
        link: "https://www.hackerearth.com/problem/algorithm/painters-partition/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=srsFN5OHBgw",
        companies: "",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Aggressive cows",
        link: "https://www.spoj.com/problems/AGGRCOW/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=7wOzDqsfXy0",
        companies: "Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 7,
        question: "Median of 2 Sorted Arrays",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Amazon Samsung Microsoft Google",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "STRINGS",
    problems: [
      {
        id: 1,
        question: "Valid Palindrome",
        link: "https://leetcode.com/problems/valid-palindrome/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=dSRFgEs3a6A&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=31",
        companies: "Amazon Cisco DEShaw Facebook FactSet MorganStanley Paytm Zoho",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "Longest Common Prefix",
        link: "https://leetcode.com/problems/longest-common-prefix/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Adobe Blinkit Dunzo",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Valid Anagram",
        link: "https://leetcode.com/problems/valid-anagram/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Google Adobe Flipkart Nagarro Media.net Directi",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Reverse Words in String",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=RitppzIdMCo&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=33",
        companies: "",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "Remove All Occurrences of String",
        link: "https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/dSRFgEs3a6A?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=823",
        companies: "",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Permutation in String",
        link: "https://leetcode.com/problems/permutation-in-string/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=VXewy91P0S4&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=32",
        companies: "Adobe GoldmanSachs Uber",
        prerequisites: "",
        completed: false
      },
      {
        id: 7,
        question: "String Compression",
        link: "https://leetcode.com/problems/string-compression/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=cAB15h6-sWA&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=34",
        companies: "",
        prerequisites: "",
        completed: false
      },
      {
        id: 8,
        question: "Group Anagrams",
        link: "https://leetcode.com/problems/group-anagrams/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Samsung Adobe Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 9,
        question: "Minimum Window Substring",
        link: "https://leetcode.com/problems/minimum-window-substring/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Amazon Google MakeMyTrip Streamoid Technologies Microsoft Media.net Atlassian Flipkart",
        prerequisites: "",
        completed: false
      },
      {
        id: 10,
        question: "Kmp Algorithm",
        link: "https://leetcode.com/problems/longest-happy-prefix/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "",
        prerequisites: "",
        completed: false
      },
      {
        id: 11,
        question: "Robin Karp",
        link: "",
        difficulty: "Hard",
        solutionLink: "",
        companies: "",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "RECURSION & BACKTRACKING",
    problems: [
      {
        id: 1,
        question: "Combination Sum I",
        link: "https://leetcode.com/problems/combination-sum/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=jkgZw2WEaqA&list=PLfqMhTWNBTe2C_dQAP1UoemcgAxBTlItp&index=9",
        companies: "Adobe Amazon Microsoft Oracle DE Shaw Salesforce",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "Combination Sum II",
        link: "https://leetcode.com/problems/combination-sum-ii/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Adobe Amazon Microsoft Goldman Sachs Oracle",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Palindrome Partitioning",
        link: "https://leetcode.com/problems/palindrome-partitioning/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=aZ0B1eWkSVU&list=PLfqMhTWNBTe2C_dQAP1UoemcgAxBTlItp&index=10",
        companies: "Meta Adobe Infosys Walmart Labs Amazon Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Knights Tour",
        link: "https://leetcode.com/problems/check-knight-tour-configuration/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Amazon Microsoft Oracle Meta TCS Apple Salesforce Citadel",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "M Coloring",
        link: "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Amazon Microsoft Meta Intuit Citadel Goldman Sachs Oracle",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Rat in a Maze",
        link: "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=D8Yze9CDDAw&list=PLfqMhTWNBTe2C_dQAP1UoemcgAxBTlItp&index=8",
        companies: "Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 7,
        question: "Subsets II",
        link: "https://leetcode.com/problems/subsets-ii/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/pNzljlzDCiI?list=PLfqMhTWNBTe2C_dQAP1UoemcgAxBTlItp&t=1539",
        companies: "Google Amazon Microsoft Meta Adobe Apple TCS Flipkart Uber Swiggy",
        prerequisites: "",
        completed: false
      },
      {
        id: 8,
        question: "Merge Sort",
        link: "https://leetcode.com/problems/sort-an-array/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Amazon Meta Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 9,
        question: "N Queens",
        link: "https://leetcode.com/problems/n-queens/",
        difficulty: "Hard",
        solutionLink: "https://www.youtube.com/watch?v=BdSJnIdR-4s&list=PLfqMhTWNBTe2C_dQAP1UoemcgAxBTlItp&index=6",
        companies: "Microsoft Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 10,
        question: "Sudoku Solver",
        link: "https://leetcode.com/problems/sudoku-solver/description/",
        difficulty: "Hard",
        solutionLink: "https://www.youtube.com/watch?v=70cP3qtJp-s&list=PLfqMhTWNBTe2C_dQAP1UoemcgAxBTlItp&index=7",
        companies: "Amazon TCS Apple Meta Infosys Oracle Adobe Hive",
        prerequisites: "",
        completed: false
      },
      {
        id: 11,
        question: "Count Inversions",
        link: "https://leetcode.com/problems/count-the-number-of-inversions/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Google Amazon Salesforce",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "LINKED LIST",
    problems: [
      {
        id: 1,
        question: "Reverse a LL",
        link: "https://leetcode.com/problems/reverse-linked-list/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=R-CKBYnOv1U&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=59",
        companies: "Google Meta Apple Microsoft Amazon Oracle Adobe TCS Qualcomm Paypal JP Morgan",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "Middle of LL",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=nzaHG0dme4g&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=59",
        companies: "Amazon Meta Google Goldman Sachs Qualcomm Intuit Walmart Labs",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Merge 2 Sorted LL",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=f8RPIb-0DDE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=61",
        companies: "Accolite Amazon Belzabar Brocade FactSet Flipkart MakeMyTrip Microsoft OATS Systems Oracle Samsung Synopsys Zoho",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Check if LL Is Palindrome or Not",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Amazon Meta Google Goldman Sachs Cisco Samsung Walmart Labs Wipro",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "Detect Cycle in LL",
        link: "https://leetcode.com/problems/linked-list-cycle/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=-1E8ZMS0gSs&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=60",
        companies: "Google Meta Microsoft Amazon Oracle Paytm Apple Nvidia",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Remove Cycle in LL",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=-1E8ZMS0gSs&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=60",
        companies: "Amazon Meta Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 7,
        question: "Flatten LL",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=I8b0rff5F9M&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=66",
        companies: "Google Amazon Meta Microsoft Qualcomm Oracle Adobe Uber",
        prerequisites: "",
        completed: false
      },
      {
        id: 8,
        question: "Clone LL with Random Pointers",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=8ze7Zopdsaw&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=62",
        companies: "Meta Amazon Microsoft Google Intel Walmart Labs Nvidia Flipkart Uber Oracle",
        prerequisites: "",
        completed: false
      },
      {
        id: 9,
        question: "Add 2 Numbers",
        link: "https://leetcode.com/problems/add-two-numbers/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Amazon Meta Microsoft Oracle Tejas Network Josh Technology TCS Accenture",
        prerequisites: "",
        completed: false
      },
      {
        id: 10,
        question: "Reverse Linked List 2",
        link: "https://leetcode.com/problems/reverse-linked-list-ii/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Amazon Meta Microsoft Adobe Uber",
        prerequisites: "",
        completed: false
      },
      {
        id: 11,
        question: "LRU Cache",
        link: "https://leetcode.com/problems/lru-cache/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=GsY6y0iPaHw",
        companies: "Nvidia Google Meta Amazon Microsoft Oracle Adobe Infosys Siemens Morgan Stanley",
        prerequisites: "",
        completed: false
      },
      {
        id: 12,
        question: "Rotate a LL",
        link: "https://leetcode.com/problems/rotate-list/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Google Meta Microsoft Salesforce Infosys Uber Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 13,
        question: "Reverse Nodes in K Groups",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/description/",
        difficulty: "Hard",
        solutionLink: "https://www.youtube.com/watch?v=-swgIiMIlJo&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=66",
        companies: "Google Amazon Meta Microsoft Apple Uber Adobe TCS DE Shaw Zepto",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "STACK & QUEUE",
    problems: [
      {
        id: 1,
        question: "Implement Stack using Queue",
        link: "https://leetcode.com/problems/implement-stack-using-queues/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=sFvP5Ois0CE",
        companies: "Google Meta Amazon Microsoft Adobe Oracle Optum",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "Implement Queue using Stack",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/description/",
        difficulty: "Easy",
        solutionLink: "https://youtu.be/sFvP5Ois0CE?t=544",
        companies: "Amazon Google Microsoft Adobe Oracle Netflix Meta Uber",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Next Greater Element I",
        link: "https://leetcode.com/problems/next-greater-element-i/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=NKbExYwvjb0",
        companies: "Amazon Meta Swiggy Microsoft Google Apple Morgan Stanley Oracle",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Valid Parenthesis",
        link: "https://leetcode.com/problems/valid-parentheses/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=NlHupEeDXzY&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=70",
        companies: "Google Meta Amazon LinkedIn Intuit Visa IBM TCS JP Morgan",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "1st Non Repeating in Stream",
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=sqyCBvEQN9c",
        companies: "Amazon Goldman Sachs Google Apple Meta Microsoft Walmart Labs Adobe TCS",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Reverse 1st K Elements of Queue",
        link: "https://www.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Microsoft Amdocs Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 7,
        question: "Time needed to Buy Tickets",
        link: "https://leetcode.com/problems/time-needed-to-buy-tickets/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Uber Amazon Microsoft Google Meta",
        prerequisites: "",
        completed: false
      },
      {
        id: 8,
        question: "Next Greater Element II",
        link: "https://leetcode.com/problems/next-greater-element-ii/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=If--3pm9K3U",
        companies: "Amazon Uber",
        prerequisites: "",
        completed: false
      },
      {
        id: 9,
        question: "Previous Smaller Element",
        link: "https://leetcode.com/problems/maximum-subarray-min-product/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=WnjUfBn9nZM",
        companies: "Amazon Meta Microsoft Apple Visa Oracle Intuit Citadel Samsung Paypal eBay",
        prerequisites: "",
        completed: false
      },
      {
        id: 10,
        question: "Celebrity Problem",
        link: "https://leetcode.com/problems/find-the-celebrity/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=OZPmEA_8FM8",
        companies: "LinkedIn Meta Microsoft Amazon Uber Salesforce PhonePe",
        prerequisites: "",
        completed: false
      },
      {
        id: 11,
        question: "Get Min Element from Stack",
        link: "https://leetcode.com/problems/min-stack/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=wHDm-N2m2XY",
        companies: "Google Meta Amazon Salesforce Intuit Paypal Adobe Nike",
        prerequisites: "",
        completed: false
      },
      {
        id: 12,
        question: "Circular Tour / Gas Station",
        link: "https://leetcode.com/problems/gas-station/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=SmTow5Ht4iU",
        companies: "Amazon Microsoft Goldman Sachs Intuit IBM",
        prerequisites: "",
        completed: false
      },
      {
        id: 13,
        question: "Rotten Oranges",
        link: "https://leetcode.com/problems/rotting-oranges/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Google Microsoft Meta Oracle Adobe Cisco Infosys Salesforce BNY Mellon",
        prerequisites: "",
        completed: false
      },
      {
        id: 14,
        question: "Stock Span",
        link: "https://www.hackerearth.com/problem/algorithm/stock-span-4-a0d4600b-b5c6efe0/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=01vBuZyMfqk&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=70",
        companies: "Amazon Google Microsoft Oracle Samsung Meta Intuit PhonePe Zepto Flipkart",
        prerequisites: "",
        completed: false
      },
      {
        id: 15,
        question: "Max Area in Histogram",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/description/",
        difficulty: "Hard",
        solutionLink: "https://www.youtube.com/watch?v=ysy1o-QEj3k",
        companies: "Adobe Apple Meta Amazon Google Microsoft",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "BINARY TREES",
    problems: [
      {
        id: 1,
        question: "Inorder",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/description/",
        difficulty: "Easy",
        solutionLink: "https://youtu.be/eKJrXBCRuNQ?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=2825",
        companies: "Google Amazon Meta Microsoft Adobe Uber",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "Preorder",
        link: "https://leetcode.com/problems/binary-tree-preorder-traversal/description/",
        difficulty: "Easy",
        solutionLink: "https://youtu.be/eKJrXBCRuNQ?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=2284",
        companies: "Salesforce Amazon Microsoft Meta Google Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Postorder",
        link: "https://leetcode.com/problems/binary-tree-postorder-traversal/description/",
        difficulty: "Easy",
        solutionLink: "https://youtu.be/eKJrXBCRuNQ?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=3154",
        companies: "Amazon Meta Google Apple Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Symmetric Tree",
        link: "https://leetcode.com/problems/symmetric-tree/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Amazon Google Oracle Apple Meta Uber Intuit Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "Minimum Distance between Nodes",
        link: "https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=dSBcCynP1nA&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=100",
        companies: "Amazon Google Meta LinkedIn Adobe Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Are 2 Trees Identical or Not",
        link: "https://leetcode.com/problems/same-tree/description/",
        difficulty: "Easy",
        solutionLink: "https://youtu.be/tumW7jsjv68?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
        companies: "Meta Google Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 7,
        question: "Morris Inorder Traversal",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=PUfADhkq1LI&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=96",
        companies: "Google Amazon Meta Apple Adobe TCS Flipkart Uber LinkedIn",
        prerequisites: "",
        completed: false
      },
      {
        id: 8,
        question: "Diameter",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=aPyDPImR5UM&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=88",
        companies: "Google Amazon Meta Microsoft Apple Adobe Uber",
        prerequisites: "",
        completed: false
      },
      {
        id: 9,
        question: "Check if Tree is Height Balanced",
        link: "https://leetcode.com/problems/balanced-binary-tree/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Amazon Meta Google Visa Oracle TCS Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 10,
        question: "Subtree of Another Tree",
        link: "https://leetcode.com/problems/subtree-of-another-tree/description/",
        difficulty: "Easy",
        solutionLink: "https://youtu.be/tumW7jsjv68?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=829",
        companies: "Amazon Google Microsoft Adobe Uber Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 11,
        question: "Check if BT Mirror of itself or not",
        link: "https://leetcode.com/problems/symmetric-tree/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Amazon Google Meta Uber Morgan Stanley eBay Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 12,
        question: "Top View of a Tree",
        link: "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=9ZjefEg9Xb4&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=90",
        companies: "Amazon Google Meta LinkedIn Apple Adobe Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 13,
        question: "Bottom View of a Tree",
        link: "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Meta Amazon Google Uber Oracle Flipkart JP Morgan Accolite",
        prerequisites: "",
        completed: false
      },
      {
        id: 14,
        question: "Level Order",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Josh Technology Amazon Google Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 15,
        question: "Kth Level of Tree",
        link: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/s3Q_1IuD7XU?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=1062",
        companies: "Meta Google Amazon Adobe Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 16,
        question: "LCA",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=8DQR0c74vas&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=94",
        companies: "Meta Amazon Google LinkedIn Intuit Oracle Adobe Flipkart Salesforce Morgan Stanley",
        prerequisites: "",
        completed: false
      },
      {
        id: 17,
        question: "Transform to Sum Tree",
        link: "https://www.geeksforgeeks.org/problems/transform-to-sum-tree/1",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/PY-0DGFMj70?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
        companies: "SAP Amazon eBay Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 18,
        question: "Construct BT from Inorder & Pre order",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=NxNl4U04d5A&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=93",
        companies: "Amazon Microsoft Meta Adobe Uber VMware Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 19,
        question: "Construct BT from Inorder & Post order",
        link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Amazon Microsoft Adobe Bloomberg",
        prerequisites: "",
        completed: false
      },
      {
        id: 20,
        question: "Flatten BT to LL",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=XCiOHYeXHrM&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=87",
        companies: "Google Meta Amazon Microsoft Myntra Adobe Oracle Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 21,
        question: "Max Width of BT",
        link: "https://leetcode.com/problems/maximum-width-of-binary-tree/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=90XHQO5oQqY&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=91",
        companies: "Amazon Meta Uber Microsoft Adobe Apple Google",
        prerequisites: "",
        completed: false
      },
      {
        id: 22,
        question: "Zig Zag Traversal of BT",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Meta Microsoft Google Oracle Adobe Walmart Labs eBay Flipkart",
        prerequisites: "",
        completed: false
      },
      {
        id: 23,
        question: "Max Path Sum",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Google Meta Amazon Oracle Salesforce Goldman Sachs Uber Flipkart",
        prerequisites: "",
        completed: false
      },
      {
        id: 24,
        question: "Kth Ancestor",
        link: "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Google Amazon Microsoft",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "BST",
    problems: [
      {
        id: 1,
        question: "Kth largest in BST",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Meta Amazon Google Adobe Atlassian Salesforce",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "Sorted Array to Balanced BST",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/watch?v=XGCA04rQnZM&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=102",
        companies: "Amazon Google Meta Apple Adobe Airbnb Samsung",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Validate BST",
        link: "https://leetcode.com/problems/validate-binary-search-tree/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/8DQR0c74vas?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=3169",
        companies: "Amazon Google Meta Salesforce IBM Adobe Citadel Oracle Uber",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Kth Smallest in BST",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/Vf7LshSJ49E?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
        companies: "Accolite Amazon Google Uber Microsoft Meta",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "LCA in BST",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/8DQR0c74vas?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=2486",
        companies: "Meta Amazon LinkedIn Bloomberg Oracle Samsung Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Populate Next Right Pointers",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/watch?v=z1e5d_sDMKE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=95",
        companies: "Meta Amazon Walmart Labs Flipkart Salesforce Adobe Oracle",
        prerequisites: "",
        completed: false
      },
      {
        id: 7,
        question: "Recover BST",
        link: "https://leetcode.com/problems/recover-binary-search-tree/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/ZWGW7FminDM?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
        companies: "Microsoft Amazon Google Oracle Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 8,
        question: "Construct from Preorder",
        link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/DyLpT4VoXg4?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
        companies: "Adobe Meta Google Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 9,
        question: "BST Iterator",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/Vf7LshSJ49E?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=1180",
        companies: "Meta Amazon Microsoft LinkedIn Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 10,
        question: "Flatten BST to Sorted list",
        link: "https://leetcode.com/problems/flatten-binary-search-tree-to-sorted-list/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Meta Microsoft Amazon Nvidia",
        prerequisites: "",
        completed: false
      },
      {
        id: 11,
        question: "Inorder Successor",
        link: "https://leetcode.com/problems/inorder-successor-in-bst/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/Vf7LshSJ49E?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=712",
        companies: "Amazon Google Meta Citadel Nvidia LinkedIn Uber Intuit Qualcomm",
        prerequisites: "",
        completed: false
      },
      {
        id: 12,
        question: "Inorder Predecessor",
        link: "https://leetcode.com/problems/inorder-predecessor-in-bst/description/",
        difficulty: "Medium",
        solutionLink: "https://youtu.be/Vf7LshSJ49E?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=1023",
        companies: "Microsoft Bloomberg",
        prerequisites: "",
        completed: false
      },
      {
        id: 13,
        question: "Largest BST in BT",
        link: "https://leetcode.com/problems/largest-bst-subtree/description/",
        difficulty: "Hard",
        solutionLink: "https://youtu.be/ZWGW7FminDM?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=1350",
        companies: "Microsoft Meta",
        prerequisites: "",
        completed: false
      },
      {
        id: 14,
        question: "Serialize & Deserialize BST",
        link: "https://leetcode.com/problems/serialize-and-deserialize-bst/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Amazon Google Meta Oracle Flipkart Adobe Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 15,
        question: "Merge 2 BSTS",
        link: "https://leetcode.com/problems/merge-bsts-to-create-single-bst/description/",
        difficulty: "Hard",
        solutionLink: "https://youtu.be/ZWGW7FminDM?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&t=2300",
        companies: "Meta Microsoft",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "HEAPS",
    problems: [
      {
        id: 1,
        question: "Merge K Sorted Arrays",
        link: "https://leetcode.com/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=sorting",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Google Meta Amazon Microsoft HCL Cisco IBM Oracle Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "K most Frequent Elements",
        link: "https://leetcode.com/problems/top-k-frequent-elements/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Meta Amazon Google Microsoft Oracle Goldman Sachs Uber Salesforce",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Heap Sort",
        link: "https://leetcode.com/problems/sort-an-array/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Adobe TCS Amazon Google Meta Hive Infosys Oracle Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Kth Smallest Element",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/?envType=problem-list-v2&envId=sorting",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Meta Apple PhonePe Salesforce",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "Median from Stream",
        link: "https://leetcode.com/problems/find-median-from-data-stream/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Google Amazon Meta Apple Microsoft Pinterest Paypal Oracle Goldman Sachs",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Smallest Range in K Sorted List",
        link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Amazon PhonePe Meta Microsoft Flipkart DE Shaw Adobe",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "TRIE",
    problems: [
      {
        id: 1,
        question: "Longest Common Prefix",
        link: "https://leetcode.com/problems/longest-common-prefix/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Amazon TCS Visa Accenture Infosys Deloitte Google Oracle",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "Word Break Problem",
        link: "https://leetcode.com/problems/word-break/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Google Netflix Intuit Walmart Labs Salesforce Flipkart Uber Oracle",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Implement a Phone Directory",
        link: "https://leetcode.com/problems/design-phone-directory/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Implement a Trie",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Amazon Apple Meta Uber Nvidia Samsung",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "Longest String with All Prefix",
        link: "https://leetcode.com/problems/longest-word-with-all-prefixes/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "GRAPH",
    problems: [
      {
        id: 1,
        question: "Flood Fill Algorithm",
        link: "https://leetcode.com/problems/flood-fill/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Samsung Flipkart SAP Labs Ola Amazon Microsoft Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "BFS",
        link: "https://leetcode.com/problems/number-of-islands/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Samsung Intuit Accolite Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "DFS",
        link: "https://leetcode.com/problems/number-of-islands/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Meta Google Visa Adobe Microsoft Apple Oracle Flipkart",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Detect cycle in undirected using BFS",
        link: "https://leetcode.com/problems/redundant-connection/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Meta Google Visa Adobe Microsoft Apple Oracle Flipkart",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "Detect cycle in undirected using DFS",
        link: "https://leetcode.com/problems/redundant-connection/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Meta Microsoft Inmobi Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Detect cycle in directed using BFS",
        link: "https://leetcode.com/problems/course-schedule/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Meta Microsoft Inmobi Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 7,
        question: "Detect cycle in directed using DFS",
        link: "https://leetcode.com/problems/course-schedule/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Amazon Meta Microsoft Apple Uber Adobe Yahoo",
        prerequisites: "",
        completed: false
      },
      {
        id: 8,
        question: "Topological Sorting (DFS)",
        link: "https://leetcode.com/problems/course-schedule-ii/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Flipkart Morgan Stanley Accolite Amazon Microsoft OYO Samsung DE Shaw Visa Moonfrog Labs",
        prerequisites: "",
        completed: false
      },
      {
        id: 9,
        question: "Prim's Algorithm (MST)",
        link: "https://leetcode.com/problems/min-cost-to-connect-all-points/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Flipkart Morgan Stanley Accolite Amazon Microsoft OYO Samsung DE Shaw Visa",
        prerequisites: "",
        completed: false
      },
      {
        id: 10,
        question: "Bellman Ford Algorithm",
        link: "https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Google Meta Salesforce Intuit LinkedIn Nvidia Uber Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 11,
        question: "Floyd Warshall Algo",
        link: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Flipkart Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 12,
        question: "Kosaraju Strongly Connected Components",
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Meta Stripe Airbnb Oracle DE Shaw Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 13,
        question: "Check Bi-partite Graph",
        link: "https://leetcode.com/problems/is-graph-bipartite/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Adobe Directi Uber DE Shaw Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 14,
        question: "Number of Islands",
        link: "https://leetcode.com/problems/number-of-islands/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Adobe Directi Uber DE Shaw Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 15,
        question: "Rotten Oranges",
        link: "https://leetcode.com/problems/rotting-oranges/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Sharechat Directi Amazon Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 16,
        question: "01 Matrix",
        link: "https://leetcode.com/problems/01-matrix/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Uber Meta Microsoft Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 17,
        question: "Course Schedule I & II",
        link: "https://leetcode.com/problems/course-schedule-ii/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Google Zoho Oracle Samsung Meta Intuit Zepto PhonePe Flipkart Citadel Salesforce",
        prerequisites: "",
        completed: false
      },
      {
        id: 18,
        question: "Alien Dictionary",
        link: "https://leetcode.com/problems/alien-dictionary/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Google Amazon LinkedIn Doordash Flipkart Adobe",
        prerequisites: "",
        completed: false
      },
      {
        id: 19,
        question: "Cheapest Flights within K Stops",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Amazon Meta Adobe Uber",
        prerequisites: "",
        completed: false
      },
      {
        id: 20,
        question: "Clone a Graph",
        link: "https://leetcode.com/problems/clone-graph/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Microsoft Meta LinkedIn Oracle Apple Adobe Nvidia Paypal Goldman Sachs Salesforce",
        prerequisites: "",
        completed: false
      },
      {
        id: 21,
        question: "Most Stones Removed",
        link: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Microsoft Flipkart Pinterest Meta Uber Samsung",
        prerequisites: "",
        completed: false
      },
      {
        id: 22,
        question: "Number of Provinces",
        link: "https://leetcode.com/problems/number-of-provinces/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Paytm",
        prerequisites: "",
        completed: false
      },
      {
        id: 23,
        question: "Number of Ways to Arrive at Destination",
        link: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "PhonePe Google Apple Microsoft Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 24,
        question: "Topological Sorting (BFS)",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/?envType=problem-list-v2&envId=topological-sort",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Sprinklr Google Amazon Meta",
        prerequisites: "",
        completed: false
      },
      {
        id: 25,
        question: "Dijkstra's Algorithm",
        link: "https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Google Amazon Meta",
        prerequisites: "",
        completed: false
      },
      {
        id: 26,
        question: "Kruskal's Algorithm (MST)",
        link: "https://leetcode.com/problems/min-cost-to-connect-all-points/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Airbnb Citadel Uber Google Meta",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "DP",
    problems: [
      {
        id: 1,
        question: "Buy & Sell Stocks I",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Amazon D-E-Shaw Directi Flipkart Goldman Sachs Intuit MakeMyTrip Microsoft Ola Cabs Oracle Paytm Pubmatic Quikr Salesforce Sapient Swiggy Walmart Media.net Google",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "0-1 Knapsack",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Directi Flipkart GreyOrange Microsoft Mobicip Morgan Stanley Oracle Payu Snapdeal Visa",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Target Sum Subset",
        link: "https://leetcode.com/problems/target-sum/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Myntra Microsoft Meta Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Unbounded Knapsack",
        link: "https://leetcode.com/problems/coin-change-ii/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Google",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "Coin Change",
        link: "https://leetcode.com/problems/coin-change/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Adobe Salesforce Amazon Google Microsoft Intuit Infosys Accenture",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Longest Common Subsequence",
        link: "https://leetcode.com/problems/longest-common-subsequence/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Microsoft Meta TCS Oracle",
        prerequisites: "",
        completed: false
      },
      {
        id: 7,
        question: "Longest Common Substring",
        link: "https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Morgan Stanley Amazon Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 8,
        question: "Edit Distance",
        link: "https://leetcode.com/problems/edit-distance/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Goldman Sachs Paypal Salesforce Atlassian Intuit IBM Google Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 9,
        question: "Longest Increasing Subsequence",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Google LinkedIn Cisco TCS Meta",
        prerequisites: "",
        completed: false
      },
      {
        id: 10,
        question: "Palindromic Partitioning (MCM)",
        link: "https://leetcode.com/problems/palindrome-partitioning-ii/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Goldman Sachs Citrix TCS Meta Adobe Accenture Rubrik",
        prerequisites: "",
        completed: false
      },
      {
        id: 11,
        question: "Max Product Subarray",
        link: "https://leetcode.com/problems/maximum-product-subarray/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Goldman Sachs Apple Adobe TCS Uber",
        prerequisites: "",
        completed: false
      },
      {
        id: 12,
        question: "Unique BSTs",
        link: "https://leetcode.com/problems/unique-binary-search-trees/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Google",
        prerequisites: "",
        completed: false
      },
      {
        id: 13,
        question: "Longest Palindromic Subsequence",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Google Microsoft Tower Research Capital Oracle Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 14,
        question: "Buy & Sell Stocks II",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Walmart Flipkart",
        prerequisites: "",
        completed: false
      },
      {
        id: 15,
        question: "Nth Catalan",
        link: "https://leetcode.com/problems/unique-binary-search-trees/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Google Meta Microsoft Infosys",
        prerequisites: "",
        completed: false
      },
      {
        id: 16,
        question: "Minimum Partitioning",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Oracle PhonePe Adobe Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 17,
        question: "Wildcard Pattern Matching",
        link: "https://leetcode.com/problems/wildcard-matching/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "LinkedIn DE Shaw Adobe Uber Meta Amazon",
        prerequisites: "",
        completed: false
      },
      {
        id: 18,
        question: "Rod Cutting",
        link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Uber Samsung Arcesium Google Amazon Meta",
        prerequisites: "",
        completed: false
      },
      {
        id: 19,
        question: "Egg Dropping",
        link: "https://leetcode.com/problems/super-egg-drop/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Microsoft Amazon Ola Salesforce Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 20,
        question: "Longest Bitonic Subsequence",
        link: "https://leetcode.com/problems/longest-bitonic-subsequence/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Amazon D-E-Shaw Goldman Sachs Google Hike MakeMyTrip MAQ Software Myntra Nearbuy Opera Oracle Philips Samsung Service Now Unisys VMWare Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 21,
        question: "MCM",
        link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Amazon Microsoft Google Meta",
        prerequisites: "",
        completed: false
      }
    ]
  },
  {
    name: "GREEDY",
    problems: [
      {
        id: 1,
        question: "Assign Cookies",
        link: "https://leetcode.com/problems/assign-cookies/description/",
        difficulty: "Easy",
        solutionLink: "",
        companies: "Amazon Accenture Uber Adobe Meta Google",
        prerequisites: "",
        completed: false
      },
      {
        id: 2,
        question: "Indian Coins",
        link: "https://www.geeksforgeeks.org/problems/coin-piles5152/1",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Accolite Amazon Morgan Stanley Oracle Paytm Samsung Snapdeal Synopsys Visa Microsoft Google",
        prerequisites: "",
        completed: false
      },
      {
        id: 3,
        question: "Fractional Knapsack",
        link: "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 4,
        question: "Maximum length of pair chain",
        link: "https://leetcode.com/problems/maximum-length-of-pair-chain/description/",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Amazon Bloomberg Swiggy Adobe Apple",
        prerequisites: "",
        completed: false
      },
      {
        id: 5,
        question: "Activity Selection",
        link: "https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1",
        difficulty: "Medium",
        solutionLink: "",
        companies: "Meta Amazon Google Microsoft",
        prerequisites: "",
        completed: false
      },
      {
        id: 6,
        question: "Job Scheduling",
        link: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/description/",
        difficulty: "Hard",
        solutionLink: "",
        companies: "Amazon Microsoft Airbnb Adobe PhonePe",
        prerequisites: "",
        completed: false
      }
    ]
  }
];