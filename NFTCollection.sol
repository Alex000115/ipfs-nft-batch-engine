// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTCollection is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string public baseTokenURI;

    constructor(string memory name, string memory symbol, string memory baseURI) ERC721(name, symbol) {
        baseTokenURI = baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function mintBatch(address recipient, uint256 quantity) public onlyOwner {
        require(quantity > 0, "Quantity cannot be zero");
        
        for (uint256 i = 0; i < quantity; i++) {
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();
            _safeMint(recipient, newItemId);
        }
    }

    function setBaseURI(string memory currentBaseURI) public onlyOwner {
        baseTokenURI = currentBaseURI;
    }
}
