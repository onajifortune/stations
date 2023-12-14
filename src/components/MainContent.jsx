function MainContent (props) {
    const classes = 'main-content ' + props.className

    return <View className={classes}>{props.children}{classes}</View>
}

export default MainContent;