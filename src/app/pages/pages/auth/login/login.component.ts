import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { fadeInUp400ms } from "../../../../../@vex/animations/fade-in-up.animation";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "vex-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;
  userName: string;
  lastName: string;
  comepleteName: string;
  password: any;
  loading: boolean = false;
  inputType = "password";
  visible = false;
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
    if(typeof window !== undefined){
      if(localStorage.getItem("jwt")){
        this.isLoggedIn = true;
        this.router.navigate(['dashboards/analytics']);
      }
    }
  }

  send() : void {
    this.userName = this.form.get("email").value;
    this.password = this.form.get("password").value;
    this.loading = true;
    if (this.userName !== "" && this.password !== "") {

      this.authService.getUser(this.userName , this.password).subscribe((user) => {
        console.log(user.data)
      })
      this.authService
        .getUser(this.userName, this.password)
        .subscribe((res) => {
          if (res.data) {
            this.loading = false;
            this.snackbar.open("Authenticated ! Redirecting...)", "", {duration: 10000,});
             location.href = "/dashboards/analytics"
             localStorage.setItem("UserId", res.data.userId)
             localStorage.setItem("jwt", res.data.jwtToken)
          }
          else{
            this.loading = false;
            this.snackbar.open("Something Went Wrong)", "", {duration: 5000,});
          }
        });
    }
  }

  redirect():void {
    this.router.navigate(['dashboards/analytics']);
  }
  toggleVisibility() {
    if (this.visible) {
      this.inputType = "password";
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = "text";
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
