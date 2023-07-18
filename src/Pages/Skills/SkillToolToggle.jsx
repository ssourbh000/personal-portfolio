import './SkillToolToggle.scss'

const SkillToolToggle = () => {
  return (
    <div class="switch-button" data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
        <input class="switch-button-checkbox" type="checkbox"></input>
        <label class="switch-button-label" for=""><span class="switch-button-label-span">Skills</span></label>
  </div>
  )
}

export default SkillToolToggle