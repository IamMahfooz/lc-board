**Problem :**

1. Have you ever thought of having a platform where you could have solved some Programming questions with writing logic
   *while you are in an INTERVIEW ?*  
   I guess the answer is obviously YES ! . (It's always better to deliver your full logic to the interviewer , whether
   or not you are completely able to solve it.)
2. According to the present situation , where every software developer goes through the phase of griding their DSA
   skill , Have you wondered of having a platform where you can write your logic notes and store it in a structured way
   for revisions ?
3. I'm lazy adding the many others here :)

**Solution :**  
A single webApp solves all the problem .

## Getting Started

Open [https://lc-board-ochre.vercel.app/](https://lc-board-ochre.vercel.app/) with your browser to see the result.

*Main Feature* : From the entered leectode question ID , it generates a partitioned page containing problem statement
and a whiteBoard that can store your logic notes.  
The full list of problem solved can be viewed under the archive section.

## WebApp Overview

It has 3 sections : Archive [WIP] , WhiteBoard and Lc-Board ( homepage is the start to this feature) .

1. LC-Board : Just enter your problem-id and it will take you to a page containing a white board and the problem
   statement of the problem id.
2. WhiteBoard : It is a simple whiteBoard where you can brainstorm whatever you like !
3. Archive : This is the archive section of all your notes.

## Technologies

**Frontend** : Next.js and tailwind-css .

**Backend** : Node.js

1. Fetching Problem Statement : Made use of [Website](lcid.cc) to extract the title-slug of the leetcode question ,then
   used the Leetcode GRAPHQL API to fetch the problem statement.

**Database** : Google's Firebase .

## Glimpses

https://github.com/IamMahfooz/lc-board/assets/92675550/33528593-81d3-4e74-a20a-a7def71c5715

*Contributions are Welcomed !!*