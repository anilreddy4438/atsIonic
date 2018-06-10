
export class ContactModel{
 mobileNumber:string = "";
 homeNumber:string ="" ;
 email1:string ="";
 email2:string = "";
 skypeId:string =""
}

export class AddressModel{
   streetAddres:string
   city:string;
   state:string;
   postalCode:string;
   country:string
}

export class Tab1Model{
  private firstName:string;
  private lastName:string;
  private middleName:string;
  private jobTitle:string;
  private totalExperience:string;
  private workAuthorization:string;
  private educationLevel:string;
  private rateSalary:string;
  private jobType:string;
  private employmentType:Array<string>;
  private relocation:string;
  private securityClearance:boolean = false;
  private willingtoTravel:boolean = false;
  private private:boolean =true;
  private owners:Array<string>;
  private source:string;
  private userId:string;
  private candidateStatus:string;
  private contact:ContactModel;
  private address:AddressModel
  constructor(){
    this.firstName ="";
    this.lastName ="";
    this.middleName ="";
    this.jobTitle ="";
    this.totalExperience ="";
    this.workAuthorization ="";
    this.educationLevel ="";
    this.rateSalary="";
    this.jobType ="";
    this.employmentType =[];
    this.relocation ="";
    this.owners = [];
    this.source ="";
    this.userId ="";
    this.candidateStatus ="";
    this.contact = new ContactModel();
    this.address = new AddressModel()
  }
  set _firstName(value: string) {
    this.firstName = value;
  }

  get _firstName(): string {
    return this.firstName;
  }
  set _lastName(value: string) {
    this.lastName = value;
  }

  get _lastName(): string {
    return this.lastName;
  }
  set _middleName(value: string) {
    this.middleName = value;
  }

  get _middleName(): string {
    return this.middleName;
  }
  set _jobTitle(value: string) {
    this.jobTitle = value;
  }

  get _jobTitle(): string {
    return this.jobTitle;
  }
  set _totalExperience(value: string) {
    this.totalExperience = value;
  }

  get _totalExperience(): string {
    return this.totalExperience;
  }
  set _workAuthorization(value: string) {
    this.workAuthorization = value;
  }

  get _workAuthorization(): string {
    return this.workAuthorization;
  }
  set _educationLevel(value: string) {
    this.educationLevel = value;
  }

  get _educationLevel(): string {
    return this.educationLevel;
  }
  set _rateSalary(value: string) {
    this.rateSalary = value;
  }

  get _rateSalary(): string {
    return this.rateSalary;
  }
  set _jobType(value: string) {
    this.jobType = value;
  }

  get _jobType(): string {
    return this.jobType;
  }
  set _employmentType(value: Array<string>) {
    this.employmentType = value;
  }

  get _employmentType(): Array<string> {
    return this.employmentType;
  }
  set _relocation(value: string) {
    this.relocation = value;
  }

  get _relocation(): string {
    return this.relocation;
  }
  set _securityClearance(value: boolean) {
    this.securityClearance = value;
  }

  get _securityClearance(): boolean {
    return this.securityClearance;
  }
  set _willingtoTravel(value: boolean) {
    this.willingtoTravel = value;
  }

  get _willingtoTravel(): boolean {
    return this.willingtoTravel;
  }
  set _private(value: boolean) {
    this.private = value;
  }

  get _private(): boolean {
    return this.private;
  }
   set _owners(value: Array<string>) {
    this.owners = value;
  }

  get _owners():  Array<string> {
    return this.owners;
  }
  set _source(value: string) {
    this.source = value;
  }

  get _source(): string {
    return this.source;
  }
  set _userId(value: string) {
    this.userId = value;
  }

  get _userId(): string {
    return this.userId;
  }
  set _candidateStatus(value: string) {
    this.candidateStatus = value;
  }

  get _candidateStatus(): string {
    return this.candidateStatus;
  }
  set _contact(value: ContactModel) {
    this.contact = value;
  }

  get _contact(): ContactModel {
    return this.contact;
  }
  set _address(value: AddressModel) {
    this.address = value;
  }

  get _address(): AddressModel {
    return this.address;
  }


}
