var {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var getField = require('../../../API/fbAPI').getField;
var getEdge = require('../../../API/fbAPI').getEdge;

const pageType = module.exports = new GraphQLObjectType({
	name:'page',
	description: 'return a facebook page',
	fields: ()=>({
		/*-----------------------------------fields--------------------------*/
		id: 					{ type: GraphQLString },
		name: 					{ type: GraphQLString },
		about: 					{ type: GraphQLString,
									resolve: ({id}) => getField({id},'about')},
		affiliation: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'affiliation')},
		artists_we_like: 		{ type: GraphQLString,
									resolve: ({id}) => getField({id},'artists_we_like')},
		attire: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'attire')},
		awards: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'awards')},
		band_interests: 		{ type: GraphQLString,
									resolve: ({id}) => getField({id},'band_interests')},
		band_members: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'band_members')},
		bio:					{ type: GraphQLString,
									resolve: ({id}) => getField({id},'bio')},
		birthday: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'birthday')},
		booking_agent: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'booking_agent')},
		built: 					{ type: GraphQLString,
									resolve: ({id}) => getField({id},'built')},
		category:				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'category')},
		checkins: 				{ type: GraphQLInt, 
									resolve: ({id}) => getField({id},'checkins')},
		culinary_team: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'culinary_team')},
		current_location: 		{ type: GraphQLString,
									resolve: ({id}) => getField({id},'current_location')},
		description: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'description')},
		description_html: 		{ type: GraphQLString,
									resolve: ({id}) => getField({id},'description_html')},
		directed_by: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'directed_by')},
		display_subtext: 		{ type: GraphQLString,
									resolve: ({id}) => getField({id},'display_subtext')},
		emails: 				{ type: new GraphQLList(GraphQLString),
									resolve: ({id}) => getField({id},'emails')},
		features: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'features')},
		food_styles: 			{ type: new GraphQLList(GraphQLString),
									resolve: ({id}) => getField({id},'food_styles')},
		founded: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'founded')},
		general_info: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'general_info')},
		general_manager: 		{ type: GraphQLString,
									resolve: ({id}) => getField({id},'general_manager')},
		genre: 					{ type: GraphQLString,
									resolve: ({id}) => getField({id},'genre')},
		hometown: 				{ type: GraphQLString ,
									resolve: ({id}) => getField({id},'hometown')},
		influences: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'influences')},
		link: 					{ type: GraphQLString,
									resolve: ({id}) => getField({id},'link')},
		location: 				{ type: locationType,
									resolve: ({id}) => getField({id},'location')},
		members: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'members')},
		mission: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'mission')},
		company_overview: 		{ type: GraphQLString,
									resolve: ({id}) => getField({id},'company_overview')},
		network: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'network')},
		overall_star_rating: 	{ type: GraphQLFloat,
									resolve: ({id}) => getField({id},'overall_star_rating')},
		personal_info: 			{ type: GraphQLString ,
									resolve: ({id}) => getField({id},'personal_info')},
		personal_interests: 	{ type: GraphQLString,
									resolve: ({id}) => getField({id},'personal_interests')},
		pharma_safety_info: 	{ type: GraphQLString,
									resolve: ({id}) => getField({id},'pharma_safety_info')},
		phone: 					{ type: GraphQLString,
									resolve: ({id}) => getField({id},'phone')},
		plot_outline: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'plot_outline')},
		press_contact: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'press_contact')},
		price_range: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'price_range')},
		produced_by: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'produced_by')},
		products: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'products')},
		public_transit: 		{ type: GraphQLString,
									resolve: ({id}) => getField({id},'public_transit')},
		rating_count: 			{ type: GraphQLInt,
									resolve: ({id}) => getField({id},'rating_count')},
		record_label: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'record_label')},
		release_date: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'release_date')},
		schedule: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'schedule')},
		screenplay_by: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'screenplay_by')},
		season: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'season')},
		single_line_address: 	{ type: GraphQLString,
									resolve: ({id}) => getField({id},'single_line_address')},
		starring: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'starring')},
		store_number: 			{ type: GraphQLInt,
									resolve: ({id}) => getField({id},'store_number')},
		studio: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'studio')},
		talking_about_count: 	{ type: GraphQLInt,
									resolve: ({id}) => getField({id},'talking_about_count')},
		username: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'username')},
		website: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'website')},
		written_by: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'written_by')},									
		
		best_page:				{ type: pageType,
									resolve: ({id}) => getField({id},'best_page')},
		category_list: 			{ type: new GraphQLList(pageCategoryType),
									resolve: ({id}) => getField({id},'category_list')},
		contact_address: 		{ type: mailingAddressType,
									resolve: ({id}) => getField({id},'contact_address')},
		cover:					{ type: coverPhotoType,
									resolve: ({id}) => getField({id},'cover')},		
		parent_page: 			{ type: pageType,
									resolve: ({id}) => getField({id},'parent_page')},
		restaurant_services: 	{ type: pageRestaurantServicesType,
									resolve: ({id}) => getField({id},'restaurant_services')},
		restaurant_specialties: { type: pageRestaurantSpecialtiesType,
									resolve: ({id}) => getField({id},'restaurant_specialties')},
									
		/*---------------------------------edges----------------------*/
		albums:					{ type: new GraphQLList(albumType),
									resolve: ({id}) => getEdge({id},'albums')},
		photos:					{ type: new GraphQLList(photoType),
									resolve: ({id}) => getEdge({id},'photos')},
		events:					{ type: new GraphQLList(eventType),
									resolve: ({id}) => getEdge({id},'events')},
		locations:				{ type: new GraphQLList(locationType),
									resolve: ({id}) => getEdge({id},'locations')},
		likes:					{ type: new GraphQLList(likeType),
									resolve: ({id}) => getEdge({id},'likes')},
		videos:					{ type: new GraphQLList(videoType),
									resolve: ({id}) => getEdge({id},'videos')},
		feed:					{ type: new GraphQLList(postType),
									resolve: ({id}) => getEdge({id},'feed')},	
		picture:				{ type: profilePictureType,
									resolve: ({id}) => getEdge({id},'picture')},									
		tagged:					{ type: new GraphQLList(postType),
									resolve: ({id}) => getEdge({id},'tagged')}
	})
});

const pageCategoryType = new GraphQLObjectType({
	name:'pageCategory',
	description:'The Page\'s sub-categories',
	fields: ()=>({
		id: 	{ type: GraphQLString },
		name: 	{ type: GraphQLString }
	})
})

const mailingAddressType = new GraphQLObjectType({
	name: 'mailingAddress',
	description: 'The mailing or contact address for this page. This field will be blank if the contact address is the same as the physical address',
	fields: ()=>({
		id: 	{ type: GraphQLString },
		city:	{ type: GraphQLString },
		city_page:	{type: pageType },
		country: 	{ type: GraphQLString },
		postal_code:{ type: GraphQLString },
		region:		{ type: GraphQLString },
		street1:	{ type: GraphQLString },
		street2:	{ type: GraphQLString }		
	})
});

const pageRestaurantServicesType = new GraphQLObjectType({
	name: 'pageRestaurantServices',
	description: '',
	fields: ()=>({
		catering: 	{ type:GraphQLInt },
		delivery: 	{ type:GraphQLInt },
		groups: 	{ type:GraphQLInt },
		kids: 		{ type:GraphQLInt },
		outdoor: 	{ type:GraphQLInt },
		pickup: 	{ type:GraphQLInt },
		reserve: 	{ type:GraphQLInt },
		takeout: 	{ type:GraphQLInt },
		waiter:		{ type:GraphQLInt },
		walkins:	{ type:GraphQLInt }
	})
});

const pageRestaurantSpecialtiesType = new GraphQLObjectType({
	name: 'pageRestaurantSpecialties',
	description: '',
	fields: ()=>({
		breakfast: 	{ type:GraphQLInt },
		coffee: { type:GraphQLInt },
		dinner: { type:GraphQLInt },
		drinks: { type:GraphQLInt },
		lunch: 	{ type:GraphQLInt }
	})
});

const coverPhotoType = require('./fbCoverPhotoType');
const userType = require('./fbUserType');
const albumType = require('./fbAlbumType');
const photoType = require('./fbPhotoType');
const eventType = require('./fbEventType');
const locationType = require('./fbLocationType');
const postType = require('./fbPostType');
const likeType = require('./fbLikeType');
const videoType = require('./fbVideoType');
const profilePictureType = require('./fbProfilePicType');