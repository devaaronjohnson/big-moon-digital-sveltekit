import { error } from '@sveltejs/kit';
import { getBlogPosts } from '$utils/getData';

/** @type {import('./$types').PageServerLoad} */

export async function load() {
    const res = await getBlogPosts();

    console.log(res);

    // const posts = res.body.data.posts;

    // if (posts) {
    //     return { posts };
    // }

    throw error(404, 'Not found');
}