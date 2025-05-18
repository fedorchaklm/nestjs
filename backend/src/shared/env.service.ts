import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  public readonly jwtSecret: string;
  public readonly accessTokenExpirationTime: number;
  public readonly refreshTokenExpirationTime: number;

  public readonly dbType: string;
  public readonly dbHost: string;
  public readonly dbPort: number;
  public readonly dbUsername: string;
  public readonly dbPassword: string;
  public readonly dbDatabase: string;

  constructor(private configService: ConfigService) {
    this.jwtSecret = this.configService.get<string>(
      'JWT_SECRET',
      '2e9df3e67ae575fccac581dbd703d476b5bc18d087baecb8449d66303ac7e38fca7af90e1f80bfd6',
    );
    this.accessTokenExpirationTime = this.configService.get<number>(
      'ACCESS_TOKEN_EXPIRATION_TIME',
      600,
    );
    this.refreshTokenExpirationTime = this.configService.get<number>(
      'REFRESH_TOKEN_EXPIRATION_TIME',
      600,
    );

    this.dbType = this.configService.get<string>('DB_TYPE', 'mysql');
    this.dbHost = this.configService.get<string>('DB_HOST', 'localhost');
    this.dbPort = this.configService.get<number>('DB_PORT', 3307);
    this.dbUsername = this.configService.get<string>('DB_USERNAME', 'user');
    this.dbPassword = this.configService.get<string>('DB_PASSWORD', 'user');
    this.dbDatabase = this.configService.get<string>(
      'DB_DATABASE',
      'my-nestjs-test',
    );
  }
}
