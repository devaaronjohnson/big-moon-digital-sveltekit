import { error } from '@sveltejs/kit';
import { getHome } from '$utils/getData';

/** @type {import('./$types').PageServerLoad} */

export async function load() {
    const res = await getHome();

    // const pageData = res.body.data.page;



    // const testimonials = res.body.data.testimonials.edges;

    console.log(res);
    // if (testimonials) {
    //     return { testimonials };
    // }

    // throw error(404, 'Not Found');
}