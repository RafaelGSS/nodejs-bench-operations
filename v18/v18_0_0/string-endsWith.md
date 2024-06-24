## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|16,471,891|8235946|
|(short string) (true) String#slice and strict comparison|19,836,761|9918381|
|(long string) (true) String#endsWith|16,075,224|8037613|
|(long string) (true) String#slice and strict comparison|19,871,592|9935797|
|(short string) (false) String#endsWith|16,274,435|8137218|
|(short string) (false) String#slice and strict comparison|20,399,442|10199722|
|(long string) (false) String#endsWith|15,855,633|7927817|
|(long string) (false) String#slice and strict comparison|18,321,749|9160875|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:30:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":16471891.63820624,"samples":8235946},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19836761.597700946,"samples":9918381},{"name":"(long string) (true) String#endsWith","opsSec":16075224.845958494,"samples":8037613},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19871592.553947773,"samples":9935797},{"name":"(short string) (false) String#endsWith","opsSec":16274435.946648244,"samples":8137218},{"name":"(short string) (false) String#slice and strict comparison","opsSec":20399442.500489447,"samples":10199722},{"name":"(long string) (false) String#endsWith","opsSec":15855633.154812638,"samples":7927817},{"name":"(long string) (false) String#slice and strict comparison","opsSec":18321749.281901404,"samples":9160875}]}-->
