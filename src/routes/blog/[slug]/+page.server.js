import { error } from '@sveltejs/kit';
import { getPost } from '$utils/getData';

/** @type {import('./$types').PageServerLoad} */

export async function load({ params }) {
    const res = await getPost(params.slug);

    const post = res.body.data.post;

    if (post) {
        return {
            body: {
                post
            }
        };
    }

    throw error(404);
}