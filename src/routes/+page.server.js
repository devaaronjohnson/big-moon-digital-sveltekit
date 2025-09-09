import { error } from '@sveltejs/kit';
import { getHome } from '$utils/getData';

/** @type {import('./$types').PageServerLoad} */

export async function load() {
    const res = await getHome();

    // const pageData = res.body.data.page;

    console.log(res.body.data.testimonials.edges);

    const testimonials = res.body.data.testimonials.edges;

    if (testimonials) {
        return { testimonials };
    }

    throw error(404, 'Not Found');
}