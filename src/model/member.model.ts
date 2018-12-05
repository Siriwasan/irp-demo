interface MemberDetail {
  members: Member[];
}

interface Member {
  userId: string;
  displayName: string;
  createdDate: Date;
  suspendedDate?: Date;
  expireDate?: Date;
}
