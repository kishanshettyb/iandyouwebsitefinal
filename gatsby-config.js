/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`
});

const strapiConfig = {
	apiURL: "https://iandyouwebsitebackend.onrender.com",
	accessToken:
		"d52abf5e933fdee0284df76d5a69925a2868df98113c8916ad558583fa17c46afffcecf607a7b19bc46bdca1d498f2db1df9ede743a873af9093a031abc72fd303248d7c52d0a3a85d7e5d0fcac2b305539d868290166ddf829b160337b78dd4e564867efb959819e47bed5d536097c5a69afcd418c5e6326a5a95d7125a2287",
	collectionTypes: [
		{
			singularName: "event",
			queryParams: {
				publicationState: process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
				populate: "*"
			}
		},
		{
			singularName: "course",
			queryParams: {
				publicationState: process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
				populate: "*"
			}
		},
		{
			singularName: "wisdom",
			queryParams: {
				publicationState: process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
				populate: "*"
			}
		},
		{
			singularName: "workshop",
			queryParams: {
				publicationState: process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
				populate: "*"
			}
		},
		{
			singularName: "eshwarikriyapopup",
			queryParams: {
				publicationState: process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
				populate: "*"
			}
		}
	]
};

module.exports = {
	siteMetadata: {
		title: `iandyouwebsite`,
		siteUrl: `https://www.yourdomain.tld`
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png"
			}
		},
		{
			resolve: "gatsby-source-strapi",
			options: strapiConfig
		},
		"gatsby-plugin-mdx",
		"gatsby-transformer-remark",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/"
			},
			__key: "images"
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/"
			},
			__key: "pages"
		}
	]
};
