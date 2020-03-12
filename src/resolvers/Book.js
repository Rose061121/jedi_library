function postedBy(parent, args, context) {
    return context.prisma.book({ id: parent.id }).postedBy()
}

module.exports = postedBy