import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser'
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de:DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a message with `forum`', () => {
    expect(component.translations['RO'][1]).toContain('forum');
  });

  it('should have an H5 tag with contain `DESPRE FORUM` ', () => {
    expect(de.query(By.css('h5')).nativeElement.innerText).toBe('DESPRE FORUM');
  });
  it('selector should be equals to `RO` after ngOnInit', async(() => {
  
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.Selector).toEqual('RO')
    })
  }))
  it('div with class container should contain a h4 tag ', () => {
    const board = fixture.debugElement.query(By.css('.container')).nativeElement;
    expect(board.innerHTML).toContain('h4');
    
    expect(board.innerHTML.length).toBeGreaterThan(0);
  });

});
