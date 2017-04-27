var {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var getField = require('../../../API/fbAPI').getField;
var getEdge = require('../../../API/fbAPI').getEdge;

const groupType = module.exports = new GraphQLObjectType({
	name: 'group',
	description:'Represents a Facebook group.',
	fields: ()=>({
		/*-------------------------------------fields------------------------------------*/
		id:						{ type: GraphQLString },
		cover: 					{ type: coverPhotoType,
									resolve: ({id}) => getField({id},'cover')},
		description: 			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'description')},
		email:					{ type: GraphQLString,
									resolve: ({id}) => getField({id},'email')},
		icon:					{ type: GraphQLString,
									resolve: ({id}) => getField({id},'icon')},
		member_request_count:	{ type: GraphQLInt,
									resolve: ({id}) => getField({id},'member_request_count')},
		name:					{ type: GraphQLString},
		owner: 					{ type: profileType},
		parent: 				{ type: profileType},
		privacy: 				{ type: GraphQLString,
									resolve: ({id}) => getField({id},'privacy')},
		updated_time:			{ type: GraphQLString,
									resolve: ({id}) => getField({id},'updated_time')},
		/*-------------------------------------edges------------------------------------*/
		admins:					{ type: new GraphQLList(userType),
									resolve: ({id}) => getEdge({id},'admins')},
		albums:					{ type: new GraphQLList(albumType),
									resolve: ({id}) => getEdge({id},'albums')},
		events:					{ type: new GraphQLList(eventType),
									resolve: ({id}) => getEdge({id},'events')},				
		members:				{ type: new GraphQLList(userType),
									resolve: ({id}) => getEdge({id},'members')},
		photos:					{ type: new GraphQLList(photoType),
									resolve: ({id}) => getEdge({id},'photos')},
		feed:					{ type: new GraphQLList(postType),
									resolve: ({id}) => getEdge({id},'feed')},
		videos:					{ type: new GraphQLList(videoType),
									resolve: ({id}) => getEdge({id},'videos')}
	})
});

const coverPhotoType = require('./fbCoverPhotoType');
const userType = require('./fbUserType');
const pageType = require('./fbPageType');
const photoType = require('./fbPhotoType');
const albumType = require('./fbAlbumType');
const eventType = require('./fbEventType');
const postType = require('./fbPostType');
const videoType = require('./fbVideoType');
const profileType = require('./fbProfileType');