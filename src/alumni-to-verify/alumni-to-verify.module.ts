import { Module } from '@nestjs/common';
import { AlumniToVerifyService } from './alumni-to-verify.service';
import { AlumniToVerifyController } from './alumni-to-verify.controller';
import { MailingModule } from 'src/mailing/mailing.module';
import { UalumniDbModule } from 'src/ualumni-db/ualumni-db.module';
import { UcabDbModule } from 'src/ucab-db/ucab-db.module';

@Module({
  imports: [MailingModule, UalumniDbModule, UcabDbModule],
  controllers: [AlumniToVerifyController],
  providers: [AlumniToVerifyService],
  exports: [AlumniToVerifyService]
})
export class AlumniToVerifyModule {}
