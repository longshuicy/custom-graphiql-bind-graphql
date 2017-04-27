var {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var getField = require('../../../API/fbAPI').getField;
var getEdge = require('../../../API/fbAPI').getEdge;

const albumType = module.exports = new GraphQLObjectType({
	name: 'album',
	description: 'Return a facebook album.',
	fields: () => ({
		/*-------------------------- fields -----------------------------------*/
		id:				{ type: GraphQLString },
		name: 			{ type: GraphQLString },
		created_time:	{ type: GraphQLString },
		count: 			{ type: GraphQLInt,
							resolve: ({id}) => getField({id},'count')},
		
		description:	{ type: GraphQLString,
							resolve: ({id}) => getField({id},'description')},
		link:			{ type: GraphQLString,
							resolve: ({id}) => getField({id},'link')},
		location:		{ type: GraphQLString,
							resolve: ({id}) => getField({id},'location')},
		privacy:		{ type: GraphQLString,
							resolve: ({id}) => getField({id},'privacy')},
		type:			{ type: GraphQLString,
							resolve: ({id}) => getField({id},'type')},
		updated_time: 	{ type: GraphQLString,
							resolve: ({id}) => getField({id},'updated_time')},
		from:			{ type: profileType,
							resolve: ({id}) => getField({id},'from')},
		place:			{ type: pageType,
							resolve: ({id}) => getField({id},'place')},
		cover_photo:	{ type: photoType,
							resolve: ({id}) => getField({id},'cover_photo')},
		event:			{ type: eventType,
							resolve: ({id}) => getField({id},'event')},
		/*-------------------------- edges ---------------------------------- */
		photos:			{ type: new GraphQLList(photoType),
							resolve: ({id}) => getEdge({id},'photos')},
		sharedposts:	{ type: new GraphQLList(postType),
							resolve: ({id}) => getEdge({id},'sharedposts')},
		likes:			{ type: new GraphQLList(likeType),
							resolve: ({id}) => getEdge({id},'likes')},
		reactions:		{ type: new GraphQLList(reactionType),
							resolve: ({id}) => getEdge({id},'reactions')},
		comments:		{ type: new GraphQLList(commentType),
							resolve: ({id}) => getEdge({id},'comments')}
	})
});

const profileType = require('./fbProfileType');
const userType = require('./fbUserType');
const pageType = require('./fbPageType');
const photoType = require('./fbPhotoType');
const eventType = require('./fbEventType');
const commentType = require('./fbCommentType');
const likeType = require('./fbLikeType');
const reactionType = require('./fbReactionType');
const postType = require('./fbPostType');
		