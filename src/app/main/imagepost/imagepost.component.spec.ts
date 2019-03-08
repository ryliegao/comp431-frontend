import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ImagepostComponent } from './imagepost.component';
import { MainService } from 'src/app/main/main.service';
import { StorageService } from 'src/app/_services';

describe('ImagepostComponent', () => {
  let component: ImagepostComponent;
  let fixture: ComponentFixture<ImagepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ImagepostComponent ],
      providers: [ MainService, StorageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
