import graphQuery from '@/app/components/custom/leetCodePs/graphql';

// Define the response structure
interface GraphQLResponse {
    data: {
        question: {
            content: string;
        }
    };
    errors?: Array<{ message: string }>;
}

export async function getProblemStatement(titleSlug: string): Promise<string> {
    try {
        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Referer: 'https://leetcode.com',
            },
            body: JSON.stringify({
                query: graphQuery,
                variables: {
                    titleSlug, //search question using titleSlug
                },
            }),
            mode: 'cors'
        });

        const result: GraphQLResponse = await response.json();

        if (result.errors) {
            return ""; // Return empty string or handle errors as needed
        }

        console.log(result.data.question.content);
        return result.data.question.content; // Return the content
    } catch (err) {
        console.error('Error: ', err);
        return ""; // Return empty string or handle errors as needed
    }
}
