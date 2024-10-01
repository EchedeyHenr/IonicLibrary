import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowLibraryPage } from './show-library.page';

describe('ShowLibraryPage', () => {
  let component: ShowLibraryPage;
  let fixture: ComponentFixture<ShowLibraryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
