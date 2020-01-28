<?php

namespace App\DataFixtures;

use App\Entity\Ad;
use App\Entity\Booking;
use Faker\Factory;
//use Cocur\Slugify\Slugify;
use App\Entity\Role;
use App\Entity\User;
use App\Entity\Image;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\Comment;


class AppFixtures extends Fixture
{
    private $encoder; 

    public function __construct(UserPasswordEncoderInterface $encoder){
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr-FR');
        //$slugify = new Slugify();

        //Je crée un nouveau rôle
        $adminRole = new Role();
        $adminRole->setTitle('ROLE_ADMIN'); 
        $manager->persist($adminRole);

        //Je crée un user qui aura ce rôle 
        $adminUser = new User();

        $adminUser->setFirstName('Amaria')
                ->setLastName('Foukia')
                ->setEmail('amaria@symfony.com')
                ->setIntroduction($faker->sentence())
                ->setDescription( $faker->paragraph(3) )
                ->setHash($this->encoder->encodePassword($adminUser,'password'))
                ->setPicture('https://avatars.io/twitter/SafyaAmaria')
                ->addUserRole($adminRole);

                $manager->persist($adminUser);

        //Gérer les utilisateurs
        $users = [];
        $genres = ['male','female'];

        for($i=0; $i<=10; $i++){

            $user = new User();

            $genre = $faker->randomElement($genres);

            $picture = 'https://randomuser.me/api/portraits/';

            $pictureId = $faker->numberBetween(1, 99) .'.jpg';

            $picture .= ($genre == 'male' ? 'men/' : 'women/') . $pictureId;

            $hash = $this->encoder->encodePassword($user, 'password');

            $user->setFirstName($faker->firstname($genre))
                ->setLastName($faker->lastname)
                ->setEmail($faker->email)
                ->setIntroduction($faker->sentence())
                ->setDescription( $faker->paragraph(3) )
                ->setHash($hash)
                ->setPicture($picture);

                $manager->persist($user);

                $users[] = $user;
        }

        //Gérer les annonces
        for($i=0 ; $i <= 30; $i++){
            $ad = new Ad();

            $title = $faker->sentence();
            //$slug = $slugify->slugify($title);
            $coverImage = $faker->imageUrl(1000,350);
            $introduction = $faker->paragraph(2);
            $content = '<p>' . join('<p></p>', $faker->paragraphs(3)) . '</p>';

            $user= $users[mt_rand(0, count($users) - 1)];

            $ad->setTitle($title)
                //->setSlug($slug)
                ->setCoverImage($coverImage)
                ->setIntroduction($introduction)
                ->setContent($content)
                ->setPrice(mt_rand(40, 200))
                ->setRooms(mt_rand(1, 5))
                ->setAuthor($user);

                for($j=1; $j <= mt_rand(2,5); $j++){
                    $image = new Image();

                    $image->setUrl($faker->imageUrl())
                        ->setCaption($faker->sentence())
                        ->setAd($ad);

                    $manager->persist($image);
                }

            //Gestion des reservations
            for($k=1; $k=mt_rand(0,10); $k++){

                $booking = new Booking();
                $createdAt = $faker->dateTime('-6 months');
                $startDate = $faker->dateTime('-3 months');

                //gestion de la date de fin
                $duration   = mt_rand(3, 10);
                $endDate    = (clone $startDate)->modify("+ $duration days");
                
                $amount     = $ad->getPrice() * $duration;
                $booker     = $users[mt_rand(0, count($users)-1)];
                $comment    = $faker->paragraph();

                $booking->setBooker($booker)
                        ->setAd($ad)
                        ->setCreatedAt($createdAt)
                        ->setStartDate($startDate)
                        ->setEndDate($endDate)
                        ->setAmount($amount)
                        ->setComment($comment);

                $manager->persist($booking);

                //gestion des commentaires réservations
                if(mt_rand(0, 1)) {
                    $comment = new Comment();
                    $comment->setContent($faker->paragraph())
                            ->setRating(mt_rand(1, 5))
                            ->setAuthor($booker)
                            ->setAd($ad);
                            
                    $manager->persist($comment);
                }
            }

            $manager->persist($ad);
    }

        $manager->flush();
    }
}
