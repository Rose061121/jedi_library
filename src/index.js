const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

async function main() {

  const newBook = await prisma.createBook({ 
    title: 'The fourth book',
    era: 'Rise of the Empire',
    author: 'author-2',
    releaseDate: '12-12-2012',
    imageId: 'SW_22',
    summary: 'This is a book about star wars',
    pages: 234,
    isbn: 123457689,
    timeLine: '10 BBY',
    series: 'Jedi Apprentice',
    bookStatus: 'Reading',
    epochTime: 'BD'
  })
  console.log(`Created new book: ${newBook.title} (ID: ${newBook.id})`)

  // Read all links from the database and print them to the console
  const allBooks = await prisma.books()
  console.log(allBooks)
}

main().catch(e => console.error(e))

const resolvers = {
    Query : {
        info: () => `This is my next Jedi message`,
        books: (root, args, context, info) => {
            return context.prisma.books()
        }
    },
    Mutation: {
        post: (root, args, context) => {
            return context.prisma.createBook({
                title: args.title,
                era: args.era,
                author: args.author,
                releaseDate: args.releaseDate,
                imageId: args.imageId,
                summary: args.summary,
                pages: args.pages,
                isbn: args.isbn,
                timeLine: args.timeLine,
                series: args.series,
                bookStatus: args.bookStatus,
                epochTime: args.epochTime
            })
        }
    },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma }
})

server.start(() => console.log(`Server is running on http://localhost:4000`))