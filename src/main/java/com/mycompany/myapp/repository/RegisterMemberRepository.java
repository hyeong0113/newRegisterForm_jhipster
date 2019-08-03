package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.RegisterMember;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the RegisterMember entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RegisterMemberRepository extends JpaRepository<RegisterMember, Long> {

}
