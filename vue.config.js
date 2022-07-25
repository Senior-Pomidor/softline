module.exports = {
	publicPath:
	process.env.NODE_ENV === "production" ? "/softline/" : "",
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
						@import "@/styles/_imports.scss";
					`,
			},
		},
	},
};
