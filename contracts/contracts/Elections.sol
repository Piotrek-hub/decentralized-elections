// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Elections {
    event Voted(address voter, address candidate);

    struct Candidate {
        address addr;
        string name;
        string photo;
        uint256 votes;
    }

    uint256 private candidatesAmount = 0;
    mapping(address => Candidate) public candidates;
    mapping(address => bool) private registeredCandidates;
    mapping(address => bool) private voters;

    function registerCandidate(string memory name, string memory photo) public {
        require(
            registeredCandidates[msg.sender] == false,
            "Candidate already registered"
        );
        registeredCandidates[msg.sender] = true;
        candidates[msg.sender] = Candidate(msg.sender, name, photo, 0);
    }

    function vote(address candidateAddress) public {
        require(
            registeredCandidates[msg.sender] == false,
            "Cant vote for yourself"
        );
        require(
            registeredCandidates[candidateAddress] == true,
            "Candidate not registered"
        );
        require(voters[msg.sender] == false, "Already voted");

        candidates[candidateAddress].votes += 1;
        voters[msg.sender] = true;

        emit Voted(candidateAddress, msg.sender);
    }
}
