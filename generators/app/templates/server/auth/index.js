async function authUser(ctx, next) {
	await next();
}

exports.authUser = authUser;