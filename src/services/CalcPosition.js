export const CalcPosition = (image, floorDimension, location) => {

    const floor = location.mapHierarchyFloor.split('>')

    const kWidth = image.width / floorDimension.width
    const kHeight = image.height / floorDimension.length
    const width = kWidth * location.x
    const height = kHeight * location.y

    return {
        floor: floor,
        width: width,
        height: height
    }

}

