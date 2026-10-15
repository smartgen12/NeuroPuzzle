import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor, Stats } from '@react-three/drei'
import { GameEngine } from '@core/GameEngine'
import { SceneManager } from '@systems/SceneManager'
import { UIManager } from '@systems/UIManager'
import { InputManager } from '@systems/InputManager'
import { AudioManager } from '@systems/AudioManager'
import { ThemeProvider } from 'styled-components'
import { theme } from '@utils/Theme'
import GlobalStyles from './GlobalStyles'

const App = () => {
  const gameEngineRef = useRef<GameEngine | null>(null)
  const sceneManagerRef = useRef<SceneManager | null>(null)
  const uiManagerRef = useRef<UIManager | null>(null)
  const inputManagerRef = useRef<InputManager | null>(null)
  const audioManagerRef = useRef<AudioManager | null>(null)

  useEffect(() => {
    // Initialize game systems
    audioManagerRef.current = new AudioManager()
    inputManagerRef.current = new InputManager()
    uiManagerRef.current = new UIManager()
    sceneManagerRef.current = new SceneManager(inputManagerRef.current)
    gameEngine
