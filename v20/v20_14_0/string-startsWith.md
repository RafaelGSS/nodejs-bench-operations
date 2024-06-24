## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|18,416,704|9208353|
|(short string) (true) String#slice and strict comparison|19,994,312|9997157|
|(long string) (true) String#startsWith|17,348,619|8674310|
|(long string) (true) String#slice and strict comparison|19,982,281|9991141|
|(short string) (false) String#startsWith|19,316,983|9658492|
|(short string) (false) String#slice and strict comparison|20,055,564|10027783|
|(long string) (false) String#startsWith|19,185,431|9592716|
|(long string) (false) String#slice and strict comparison|20,064,830|10032416|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:51:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":18416704.60030135,"samples":9208353},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19994312.44050013,"samples":9997157},{"name":"(long string) (true) String#startsWith","opsSec":17348619.340706293,"samples":8674310},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19982281.00088401,"samples":9991141},{"name":"(short string) (false) String#startsWith","opsSec":19316983.884176906,"samples":9658492},{"name":"(short string) (false) String#slice and strict comparison","opsSec":20055564.195082955,"samples":10027783},{"name":"(long string) (false) String#startsWith","opsSec":19185431.117444184,"samples":9592716},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20064830.8366844,"samples":10032416}]}-->
