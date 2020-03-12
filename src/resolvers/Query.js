function books(parent, args, context, info) {
    return context.prisma.books()
}

module.exports = books