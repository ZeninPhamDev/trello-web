import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
// import DarkModeOutLinedIcon from '@mui/icons-material/DarkModeOutLined'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = event => {
    const seclectedMode = event.target.value
    setMode(seclectedMode)
  }

  return (
    <FormControl sx={{ minWidth: '120px' }} size='small'>
      <InputLabel
        sx={{
          color: 'white',
          '&.Mui-focused': { color: 'white' }
        }}
        id='label-seclect-dark-light-mode'>
        Mode
      </InputLabel>
      <Select
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '.MuiSvgIcon-root': { color: 'white' }
        }}
        labelId='label-seclect-dark-light-mode'
        id='seclect-dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}>
        <MenuItem value={'light'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize='small' />
            Light
          </Box>
        </MenuItem>
        <MenuItem value={'dark'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* <DarkModeOutLinedIcon fontSize='small' />git  */}
            Dark
          </Box>
        </MenuItem>
        <MenuItem value={'system'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
export default ModeSelect
