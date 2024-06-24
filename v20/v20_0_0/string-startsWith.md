## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,115,273|7557637|
|(short string) (true) String#slice and strict comparison|16,097,984|8048993|
|(long string) (true) String#startsWith|14,816,831|7408416|
|(long string) (true) String#slice and strict comparison|16,095,090|8047546|
|(short string) (false) String#startsWith|15,854,990|7927496|
|(short string) (false) String#slice and strict comparison|16,107,605|8053803|
|(long string) (false) String#startsWith|15,393,799|7696900|
|(long string) (false) String#slice and strict comparison|16,083,431|8041716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:49:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15115273.722848173,"samples":7557637},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16097984.158991277,"samples":8048993},{"name":"(long string) (true) String#startsWith","opsSec":14816831.52828645,"samples":7408416},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16095090.135638488,"samples":8047546},{"name":"(short string) (false) String#startsWith","opsSec":15854990.873168543,"samples":7927496},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16107605.086956237,"samples":8053803},{"name":"(long string) (false) String#startsWith","opsSec":15393799.576325001,"samples":7696900},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16083431.424871584,"samples":8041716}]}-->
