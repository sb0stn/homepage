import { ALL_PROJECTS } from '$lib/constants/allProjects.constant.js';
import { PLACEHOLDERS } from '$lib/constants/placeholders.js';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const project = [...PLACEHOLDERS, ...ALL_PROJECTS].find((pj) => pj.id === params.projectId);

	if (project) {
		return { project };
	} else {
		throw error(404, `Die Seite "${params.projectId}" konnte nicht gefunden werden.`);
	}
};
