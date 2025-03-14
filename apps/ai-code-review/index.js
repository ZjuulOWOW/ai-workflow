import core from '@actions/core';
import github from '@actions/github';

try {
    await fetch(github.context.payload.pull_request.diff_url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
    }).then((res) => console.log(res));
} catch (error) {
    core.setFailed(error.message);
}
