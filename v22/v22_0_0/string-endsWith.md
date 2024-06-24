## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,655,395|7827698|
|(short string) (true) String#slice and strict comparison|15,939,621|7969811|
|(long string) (true) String#endsWith|14,707,435|7353718|
|(long string) (true) String#slice and strict comparison|15,902,127|7951064|
|(short string) (false) String#endsWith|15,716,114|7858058|
|(short string) (false) String#slice and strict comparison|16,005,276|8002639|
|(long string) (false) String#endsWith|15,446,981|7723491|
|(long string) (false) String#slice and strict comparison|15,954,832|7977417|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:36:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15655395.467734316,"samples":7827698},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15939621.713058414,"samples":7969811},{"name":"(long string) (true) String#endsWith","opsSec":14707435.823551804,"samples":7353718},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15902127.363949515,"samples":7951064},{"name":"(short string) (false) String#endsWith","opsSec":15716114.051169295,"samples":7858058},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16005276.495496627,"samples":8002639},{"name":"(long string) (false) String#endsWith","opsSec":15446981.474863144,"samples":7723491},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15954832.34070593,"samples":7977417}]}-->
