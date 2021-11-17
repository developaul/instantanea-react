import { Card, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";

import Story from "../../components/Story"
import { stories } from "../../mocks"

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 7.7,
  slidesToScroll: 7.7
};

const Stories = () => {
  const classes = useStyles()
  return (
    <Card>
      <Slider
        className={classes.slider}
        {...settings}>
        {stories.map(story => (
          <Story
            key={story._id}
            {...story}
          />
        ))}
      </Slider>
    </Card >
  )
}


const useStyles = makeStyles(({ spacing }: Theme) => ({
  slider: {
    paddingTop: spacing(2),
    paddingBottom: spacing(2)
  }
}), { name: 'Stories' })

export default Stories
