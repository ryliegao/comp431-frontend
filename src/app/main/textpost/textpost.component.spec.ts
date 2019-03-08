import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MainService } from 'src/app/main/main.service';
import { StorageService } from 'src/app/_services';

import { TextpostComponent } from './textpost.component';

describe('TextpostComponent', () => {
  let component: TextpostComponent;
  let fixture: ComponentFixture<TextpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TextpostComponent ],
      providers: [ MainService, StorageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
