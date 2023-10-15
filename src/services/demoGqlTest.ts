import api from "./apiClient";

export default {
    demoHello(name : string) {
        const graphql = `
            query {
                getDemo(name: "${name}") {
                    id
                    name
                    description
                    createdAt
                }
            }
        `;
        return api.post(`/demo2/graphql`, {query:graphql} );
    }
}