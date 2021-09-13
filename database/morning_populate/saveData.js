
student.save((student, address) => {
    const saveData = new Student({
        student: student._id,
        address: address._id,

    })
})

module.exports = {
    saveData: saveData,
}
