import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnChanges {
  private static readonly DARK_THEME_CLASS = 'dark-theme';
  private static readonly LIGHT_THEME_CLASS = 'light-theme';
  private static readonly DARK_THEME_LIGHT = 'light';
  private static readonly DARK_THEME_DARK = 'dark';

  @Input() public theme: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme = this.document.documentElement.classList.contains(
      ThemeSwitchComponent.DARK_THEME_CLASS
    )
      ? ThemeSwitchComponent.DARK_THEME_DARK
      : ThemeSwitchComponent.DARK_THEME_LIGHT;

    this.selectDarkTheme();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.theme === ThemeSwitchComponent.DARK_THEME_CLASS) this.selectDarkTheme();
    else this.selectLightTheme();
  }

  public selectDarkTheme(): void {
    this.document.documentElement.classList.remove(ThemeSwitchComponent.LIGHT_THEME_CLASS);
    this.document.documentElement.classList.add(ThemeSwitchComponent.DARK_THEME_CLASS);
    this.theme = ThemeSwitchComponent.DARK_THEME_DARK;
  }

  public selectLightTheme(): void {
    this.document.documentElement.classList.remove(ThemeSwitchComponent.DARK_THEME_CLASS);
    this.document.documentElement.classList.add(ThemeSwitchComponent.LIGHT_THEME_CLASS);
    this.theme = ThemeSwitchComponent.DARK_THEME_LIGHT;
  }
}
